const express = require('express');
const router = new express.Router();


router.get('/', (req,res)=>{
    console.log('Insider user route\n');

    res.status(200).send('Hello There\n');
})


router.post('/user/creatUser', (req,res)=>{
    console.log('request to create user\n');
})

module.exports = router;