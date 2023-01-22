const express = require('express');
const db = require('../db');
const router = new express.Router();


router.get('/get-plan', async (req,res,next)=>{
    const pID = req.body.pID;

    try{
    
        const x = await db.query('SELECT * FROM workout_plan_table WHERE pid = $1',
                    [pID]);
        return res.status(200).send({
            status:'success',
            data:x.rows});
        
    }catch(e){
        console.log('ERROR happened in /get-plan');
        return res.status(500).send(e);
    }
})

router.post('/save-plan', async (req,res,next)=>{
    const {body} =  req;

    const client = await db.getClient();

    try{

        await client.query('BEGIN');

        const x  = await client.query('INSERT INTO workout_plan_table(name,description,difficulty,goal,content)\
                        VALUES($1,$2,$3,$4,$5)\
                        RETURNING *',
                        [body.name,body.description,body.difficulty,body.goal,body.content]);
        const plan_id = x.rows.at(0).pid;
        
        const y  = await client.query('INSERT INTO creator_table(user_id,content_type,content_id)\
                    VALUES($1,$2,$3)\
                    RETURNING *',
                    [req.session.user_id || 0, 'plan_id', plan_id]);

        await client.query('END');
        return res.status(201).send({
            status:'success',
            plan_row:x.rows.at(0),
            creator_row:y.rows.at(0)
        });

        

    }catch(e){
        client.query('ROLLBACK');

        console.log('ERROR happened in /save-plan');
        return res.status(500).send(e);
    }finally{
        client.release();
    }
})

router.patch('/edit-plan', async(req,res,next)=>{
    const body = req.body;

    try{

        const x = await db.query('UPDATE workout_plan_table\
                        SET name=$1 , description=$2 , difficulty=$3 , goal=$4 , content=$5\
                        WHERE pid=$6 \
                        RETURNING *',
                        [body.name,body.description,body.difficulty,body.goal,body.content,body.pID]);

        return res.status(200).send(x.rows);

    }catch(e){
        console.error('ERROR happened during edit plan');
        return res.status(500).send(e);
    }
})


module.exports = router;