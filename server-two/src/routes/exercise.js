const express = require('express');
const router = new express.Router();
const db  = require('../db/index');

router.get('/read', async (req,res,next)=>{
    const {eID} = req.body;

    try{

        const x = await db.query('SELECT * FROM exercise WHERE id = $1',
            [eID]
        );

        if(x.rows.length === 0)
            return res.status(404).send('Does Not Exist');
        return res.status(200).send(x.rows);
        
    }catch(e){
        console.log('ERROR during read:' ,e);
        return res.status(500).send(e);
    }
});

router.get('/search',async (req,res)=>{

    try{

        const x= await db.query('SELECT * FROM exercise LIMIT 10');
        return  res.status(200).send(x.rows);
    }catch(e){
        return res.status(500).send('Error');
    }
})

module.exports = router;