const express = require('express');
const router = new express.Router();


router.get('/', (req,res)=>{
    console.log('Insider user route\n');

    res.status(200).send('Hello There\n');
})


module.exports = router;