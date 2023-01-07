const express = require('express');
const db = require('../db');
const router = new express.Router();


router.get('/', (req,res)=>{
    console.log('Insider user route\n');

    res.status(200).send('Hello There\n');
})

router.get('/db',async (req,res,next)=>{
    console.log('will test db query\n');

    const x = await db.query('SELECT *');

    return res.status(200).send('Testin DB Connection\n');
})


router.post('/user/creatUser', (req,res)=>{
    console.log('request to create user\n');
})

module.exports = router;