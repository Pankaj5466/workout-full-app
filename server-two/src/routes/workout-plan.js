const express = require('express');
const router = new express.Router();
const db  = require('../db/index');

router.post('/create', async (req,res)=>{

    try{
           const {uID,name,details,workoutList} = req.body;
           
           await db.query('BEGIN');

           const x = await db.query('INSERT INTO workout_plan(name,details,user_id)\
           VALUES($1,$2,$3) RETURNING id',
           [name,details,uID]);
            
           const plan_id = x.rows.at(0).id;   

           for(let i=0;i<workoutList.length;i++)
           {
                await db.query('INSERT INTO plan_workout(workout_plan_id,workout_id)\
                            VALUES($1,$2)',
                            [plan_id,workoutList[i]]);
           }

           await db.query('COMMIT');
           
           return res.status(201).send('success')
           
    }catch(e){
        console.log('Issue during workout creationg');
        await db.query('ROLLBACK');
        return res.status(409).send(e);
    }
});


module.exports = router;