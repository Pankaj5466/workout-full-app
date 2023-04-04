const express = require('express');
const router = new express.Router();
const db  = require('../db/index');

router.post('/create', async (req,res,next)=>{

    try{
           const {name,details,exerciseList} = req.body;
           //TO-DO: add transaction
           
           await db.query('BEGIN');

           const x = await db.query('INSERT INTO workout(name,details)\
           VALUES($1,$2) RETURNING id',
           [name,details]);
            const workout_id = x.rows.at(0).id;

             
          let arr=[];
          let irow  = {};
           for(let i=0;i<exerciseList.length;i++)
           {
                //new entry in workout table
                //add all relation i workout_exercise table
                irow = {
                    workout_id:workout_id,
                    exercise_id:exerciseList[i].exercise_id,
                    sequence_no:i,
                    duration:exerciseList[i].duration
                };

                const x = await db.query('INSERT INTO workout_exercise(workout_id,exercise_id,sequence_no,duration)\
                            VALUES($1,$2,$3,$4) RETURNING id',
                            [irow.workout_id,irow.exercise_id,irow.sequence_no,irow.duration]);

                const workout_exercise_id = x.rows.at(0).id;
                arr.push(workout_exercise_id);

           }

           //TO-DO: end transaction
           await db.query('COMMIT');
           
           return res.status(201).send({
            workout_id,
            "workoutExerciseList":arr
           })
           
    }catch(e){
        console.log('Issue during workout creationg');
        await db.query('ROLLBACK');
        return res.status(409).send(e);
    }
});

router.get('/read', async (req,res,next)=>{
    try{
        const {wID} = req.body;
        const x= await db.query('SELECT id,exercise_id,sequence_no,duration FROM workout_exercise we WHERE we.workout_id = $1',
        [wID]);

        return res.status(200).send(x.rows);

    }catch(e){
        console.log('Issue during read');
        return res.status(500).send(e);
    }
})

router.get('/update', async (req,res)=>{
    //if any of the entry in this workout has a progress
    try{
        const {wID} = req.body;
        const x= await db.query('SELECT exercise_id,sequence_no,duration FROM workout_exercise we WHERE we.workout_id = $1',
        [wID]);

        return res.status(200).send(x.rows);

    }catch(e){
        console.log('Issue during read');
        return res.status(500).send(e);
    }
});



module.exports = router;