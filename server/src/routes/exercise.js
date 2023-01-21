const express = require('express')
const router = new express.Router();
const db = require('../db/index')
const exerciseList = require('../data/excercise-object');


router.get('/get-exercise',async (req,res,next)=>{

    console.log('ENTER: /get-exercise')
    try
    {
        const eID = req.body.eID;
        const x = await db.query('SELECT * FROM exercise_table WHERE eID = $1',
            [eID]
        );
        return res.status(200).send(x.rows);
    }catch(e){
        console.log('ERROR happended during get\n');
        res.status(500).send(e);
    }
});

module.exports = router;