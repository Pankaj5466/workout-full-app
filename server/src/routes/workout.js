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

    try{
        const {body} = req; //or body = req.body;

        const x = await db.query('INSERT INTO workout_table(name,description,difficulty,content)\
                VALUES($1,$2,$3,$4)\
                RETURNING wID',
                [body.name,body.description,body.difficulty,body.content]);
    
        res.status(201).send({
            status:"success",
            wID:x.rows.at(0).wid});

    }catch(e){
        console.log('ERROR happened during save-workout');
        return res.status(500).send(e);
    };
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