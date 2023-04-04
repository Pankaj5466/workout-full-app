const express = require('express');
const router = new express.Router();
const db  = require('../db/index');

router.post('/create', async (req,res)=>{

    try{
           const {first_name,last_name,email,gender} = req.body;
           

           const x = await db.query('INSERT INTO website_user(first_name,last_name,email,gender)\
           VALUES($1,$2,$3,$4) RETURNING id',
           [first_name,last_name,email,gender]);
            
           const user_id = x.rows.at(0).id;      
           return res.status(201).send({user_id})
           
    }catch(e){
        console.log('Issue during workout creationg');
        return res.status(409).send(e);
    }
});


module.exports = router;