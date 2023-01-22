const express = require('express');
const db = require('../db');
const router = new express.Router();


router.get('/get-workout',async(req,res,next)=>{
    const wID = req.body.wID;
    console.log('ENTER: /get-workout',wID);

    try
    {
        const x  = await db.query('SELECT * FROM workout_table WHERE wid = $1',
                                    [wID]);
        return res.status(200).send({
            status:'success',
            data:x.rows,
        });
        
        
    }catch(e){
        console.log('ERROR happend during /get-workout');
        return res.status(500).send(e);
    }
})

router.post('/save-workout',async (req,res,next)=>{
    console.log('ENTER /save-workout');
    const {body} = req; //or body = req.body;
    const client = await db.getClient();

    try{
        
        console.log('Start of transaction')
        // await client.query('BEGIN');
        await client.query('BEGIN')

        //(a) update workout table
        const result = await client.query('INSERT INTO workout_table(name,description,difficulty,content)\
                VALUES($1,$2,$3,$4)\
                RETURNING wID',
                [body.name,body.description,body.difficulty,body.content]);
        const workout_id = result.rows.at(0).wid;
        //(b) update creator_table
        const y  = await client.query('INSERT INTO creator_table(user_id,content_type,content_id)\
                    VALUES($1,$2,$3)\
                    RETURNING *',
                    [req.session.user_id || 0, 'workout_id', workout_id]);
                
        await client.query('COMMIT');
        res.status(201).send({
            status:"success",
            "workout_id":workout_id,
            "creator_id":y.rows.at(0).creator_id,
            });

    }catch(e){
        console.log('ERROR happened during save-workout');
        await client.query('ROLLBACK');
        return res.status(500).send(e);
    }finally{
        client.release();
    }
});

router.patch('/edit-workout',async (req,res,next)=>{

    try
    {
        const x = await db.query('UPDATE workout_table\
            SET content=$1\
            WHERE wid = $2\
            RETURNING *',
            [req.body.content,req.body.wID]);

       return res.status(200).send({
        status:"success",
        data:x.rows
       })

    }catch(e){
        console.log('ERROR happened during edit-workout\n');
        return res.status(500).send(e);
    }

})




module.exports = router;