const express = require('express');
const db = require('../db');
const router = new express.Router();

router.put('/update-exercise-progress',async (req,res,next)=>{

    const body = req.body;
    const client = await db.getClient();

    try{
        
    }catch(e){
        await client.query('ROLLBACK');
        console.log("ISSUE happened during exercise update\n");
        return res.status(500).send(e);
    }finally{
        client.release();
    }
})

module.exports = router;