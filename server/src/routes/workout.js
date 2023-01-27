const express = require('express');
const db = require('../db');
const router = new express.Router();

const WORKOUT_TABLE = 'workout';
const WORKOUT_HAS_EXERCISE_TABLE = 'workout_has_exercises';
const USER_EXERCISE = 'user_exercise';

/*
SELECT ue.*
FROM workout w
JOIN workout_has_exercises whe ON whe.workout_id = w.id
JOIN user_exercise ue ON ue.id = whe.user_exercise_id
WHERE w.id = 18
*/

//TO-DO: apply user.id check, so that we return data of that user-id only
router.get('/get',async(req,res,next)=>{
    try
    {
        const {id} = req.body;
        const {rows:userExerciseList}  = await db.query(`SELECT ue.*\
                                 FROM ${WORKOUT_TABLE} w    
                                 JOIN ${WORKOUT_HAS_EXERCISE_TABLE} whe ON whe.workout_id = w.id\
                                 JOIN ${USER_EXERCISE} ue ON ue.id= whe.user_exercise_id\
                                 WHERE w.id = $1`,
                                 [id]);
        
        const {rows:workoutDetails} = await db.query(`SELECT * FROM ${WORKOUT_TABLE} WHERE id=$1`,
                                                    [id]  );

        const y = await db.query(`SELECT * FROM ${USER_EXERCISE}`)
        return res.status(200).send({
            status:'success',
            userExerciseList,
            workoutDetails            
        });
        
        
    }catch(e){
        console.log('ERROR happend during /get');
        return res.status(500).send(e);
    }
})

router.post('/create',async (req,res,next)=>{
    const client = await db.getClient();
    try{
        
        const {name,description,difficulty,content} = req.body;
        
        console.log('Start of transaction')
        // await client.query('BEGIN');
        await client.query('BEGIN')

        //(a) update workout table
        const result = await client.query(`INSERT INTO ${WORKOUT_TABLE}(name,description,difficulty)\
                VALUES($1,$2,$3)\
                RETURNING id`,
                [name,description,difficulty]);
        const workout_id = result.rows.at(0).id;
        
        //(b) update user_workout table
        for(let i=0;i<content.length;i++)
        {
            const e = content[i];
            const result = await client.query(`INSERT INTO ${USER_EXERCISE}(exercise_id,reps,sets,weight,set_complete_time,set_gap_time,difficulty)\
                VALUES($1,$2,$3,$4,$5,$6,$7)\
                RETURNING id`,
                [e.exercise_id,e.reps,e.sets,e.weight,e.set_complete_time,e.set_gap_time,e.difficulty])
            
            e.user_exercise_id = result.rows.at(0).id;
        }

        //(b) update workout_has_exercise table
        for(let i=0;i<content.length;i++)
        {
            const e = content[i];
            const y  = await client.query(`INSERT INTO ${WORKOUT_HAS_EXERCISE_TABLE}(workout_id,user_exercise_id)\
            VALUES($1,$2)\
            RETURNING id`,
            [workout_id,e.user_exercise_id]);

        }
                
        await client.query('COMMIT');
        return res.status(201).send({
            status:"success",
            "workout_id":workout_id,
            });

    }catch(e){
        console.log('ERROR happened during save-workout');
        await client.query('ROLLBACK');
        return res.status(500).send(e);
    }finally{
        client.release();
    }
});

router.patch('/update',async (req,res,next)=>{


    /*
        (a) update workout table
        (b) update user has workout_table -> delete old enty -> insert new entry
        (c) update user_exercises table (<= it has set,reps etc info)
    */
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

//-- DELETE FROM workout WHERE id = 19
router.delete('/delete',async(req,res)=>{
    try{
        const {id} = req;

        await db.query(`DELETE FROM ${WORKOUT_TABLE} WHERE id = $1`,[id]);

        return res.status(200).send('success');
    }catch(e){
        console.log('ERROR: in delete');
        return res.status(500).send(e);
    }
})

//TO-DO: apply admin middleware , so that only admin in authroize to do this task

router.get('/get-all',async(req,res)=>{
    try{
        const {rows:allWorkout} = await db.query('SELECT * FROM workout');
        return res.status(200).send(allWorkout);
    }catch(e){
        console.log('ERROR in getting all workoutid');
        return res.status(500).send(e);
    }
})



module.exports = router;