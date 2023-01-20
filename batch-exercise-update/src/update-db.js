const db = require("./db");
const fs = require('fs');
const path = require('path');

// import db from './db/index.js';
// import fs from 'fs';
// import path from 'path';
// import chalk from 'chalk';

const getExerciseObject = () =>{
    const filePath  = path.join(__dirname, '/data') + '/excercise-object.js';

    const file = fs.readFileSync(filePath,'utf-8');
    const list = JSON.parse(file);
    // console.log(list);

    return list;
}


const update = async () =>{
    console.log('ENTER: update');
    try{

    const x = await db.query('SELECT * FROM user_table');
    // console.log(x.rows);
    // return x.rows;

    const exerciseList = getExerciseObject();

    for(let i=0;i<1;i++)
    {
        const obj = exerciseList[i];
        console.log('will try to insert: ',obj);
    }
    // const y = await db.query('INSERT INTO exercise_table ')

    
    }catch(e){
        // throw e;
        console.log(chalk.green('ERROR happened\n'));
        console.log(e);
    }
}

const main = () =>{
    console.log('MAIN execution stat');

    // update.then(response => {
    //      console.log('success to update');
    //      console.log(response);
    // }).catch(e=>{
    //     console.log('ERROR happened during DB update\n');
    //     console.log(e);
    // })

    update();
}
main();

// getExerciseObject();