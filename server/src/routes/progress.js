const express = require('express');
const db = require('../db');
const router = new express.Router();

const USER_COMPLETE_TABLE = 'user_complete';

router.put('/update-user-exercise-progress',async (req,res,next)=>{
    try{
        const {user_id,user_exercise_id,user_difficulty,duration,calorie,weight,rating} = req.body;

        const result = await db.query(`INSERT INTO ${USER_COMPLETE_TABLE}\
            (user_id,user_exercise_id,date,user_difficulty,calorie,weight,rating,duration)\
            VALUES($1,$2,$3,$4,$5,$6,$7,$8)\
            RETURNING *`,
            [user_id,user_exercise_id,new Date(),user_difficulty,duration,calorie,weight,rating]);
        
        return res.status(200).send(result.rows);
        
    }catch(e){
        console.log("ISSUE happened during exercise update\n");
        return res.status(500).send(e);
    }
})

module.exports = router;