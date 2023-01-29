const express = require('express');
const db = require('../db');
const router = new express.Router();

const USER_TABLE = db.table.USER_TABLE;


router.get('/', (req,res)=>{
    console.log('Insider user route\n');

    res.status(200).send('Hello There\n');
})

router.get('/get-all-user',async (req,res,next)=>{
    console.log('will test db query\n');

    try{

        const x = await db.query(`SELECT * FROM ${USER_TABLE}`);

        return res.status(200).send(x.rows);
    }catch(e){
        console.log('Something happened during DB query\n');
        return res.status(500).send(e);
    }

    // return res.status(200).send('Testin DB Connection\n');
})


router.post('/sign-up', async (req,res)=>{
    const user  = req.body;
    
    try{

        const x = await db.query(`INSERT INTO ${USER_TABLE}(email,password,name,age,weight,height,gender,goal)\
                    VALUES($1,$2,$3,$4,$5,$6,$7,$8)\
                    RETURNING *`,
                    [user.email,user.password,user.name,user.age,user.weight,user.height,user.gender,user.goal]);
        return res.status(201).send({
            status:'created-user successfully',
            id:x.rows.at(0).id
        })

                
    }catch(e){
        console.log('ERROR during user-creation');
        return res.status(500).send(e);
    }
})

router.post('/login',async (req,res,next)=>{
    try{
        const x = await db.query(`SELECT * FROM ${USER_TABLE} WHERE email=$1`,
                    [req.body.email]);
        if(x.rows.length === 0)
            return res.status(401).send('User do not exist');

        if(x.rows.at(0).password === req.body.password)
        {

            req.session.user_id= x.rows.at(0).user_id;
            return res.status(200).send('Success in login');
            //TO-DO: need to pass some authentication token, which will be used to check if user is authenticated or not
            
        }
        else{
            return res.status(401).send('Wrong Credentils');
        }
    }catch(e){
        console.log('ERROR happenned during login');
        console.log(e);
        return res.status(500).send(e.toString()); //IMP: convert exception to string
    }
})
module.exports = router;