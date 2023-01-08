const express = require('express')
const router = new express.Router();
const exerciseList = require('../data/excercise-object')

router.get('/run-batch',async (req,res,next)=>{
    console.log('run-batch requested\n');

    console.log(exerciseList);
   
     return res.status(200).send(exerciseList);
})

module.exports = router;