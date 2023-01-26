const express = require('express');
const db = require('../db');
const router = new express.Router();


const WORKOUT_TABLE ='workout_plan';
router.get('/get', async (req,res,next)=>{
    const user_id = req.body.user_id;

    try{
    
        const x = await db.query(`SELECT * FROM ${WORKOUT_TABLE} WHERE user_id = $1`,
                    [user_id]);
        return res.status(200).send({
            status:'success',
            data:x.rows});
        
    }catch(e){
        console.log('ERROR happened in /get-plan');
        return res.status(500).send(e);
    }
})

router.patch('/edit', async(req,res,next)=>{
    const body = req.body;

    try{

        const x = await db.query(`UPDATE ${WORKOUT_TABLE}\
                        SET name=$1 , description=$2\
                        WHERE id=$3 \
                        RETURNING *`,
                        [body.name,body.description,body.id]);

        return res.status(200).send(x.rows);

    }catch(e){
        console.error('ERROR happened during edit plan');
        return res.status(500).send(e);
    }
})

router.post('/create',async (req,res,next)=>{
    const {body} = req;

    try{
        const result = await db.query(`INSERT INTO ${WORKOUT_TABLE}(name,description,user_id)\
                                VALUES($1,$2,$3)`,
                                [body.name,body.description,body.user_id]);
        return res.status(200).send('Success in creation');
    }catch(e){
        console.log('Issue happened during workout-plan creation');
        return res.status(401).send(e);
    }
})

router.delete('/delete',async (req,res)=>{
    const {body} = req;

    try{
        await db.query(`DELETE FROM ${WORKOUT_TABLE} WHERE id=$1`,
                    [body.id]);

        return res.status(200).send('delete successful');
    }catch(e){
        console.log('FAILED to delete');
        return res.status(401).send(e);
    }
})


module.exports = router;

/* DEAD CODE <- reference for transcation code  
//Absolute route <= just for transactin code refrance purpose
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
*/