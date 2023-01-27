const express = require('express');
const db = require('../db');
const router = new express.Router();

//API enpoint in postman be localhost:8080/utils/get-exercise/2
//NOTE: this is different from query-parameter passing
router.get('/get-exercise/:id',async (req,res)=>{

    try{
        const {id} = req.params;
        const {rows} = await db.query(`SELECT * FROM ${db.table.EXERCISE_TABLE} WHERE id = $1`,[id]);
        
        if(rows.length === 0)
            return res.status(404).send('Exercise NOT found');
        return res.status(200).send(rows.at(0));


    }catch(e){
        console.log('ERROR: in get-exercise-id');
        return res.status(500).send(e);
    }
})

router.get('/get-user-exercise/:id',async (req,res)=>{

    try{
        const {id} = req.params;
        const {rows} = await db.query(`SELECT * FROM ${db.table.USER_EXERCISE_TABLE} WHERE id = $1`,[id]);
        
        if(rows.length === 0)
            return res.status(404).send('Exercise NOT found');
        return res.status(200).send(rows.at(0));


    }catch(e){
        console.log('ERROR: in get-exercise-id');
        return res.status(500).send(e);
    }
})

module.exports = router;