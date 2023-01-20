const db = require("./db");
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

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

    // const x = await db.query('SELECT * FROM user_table');
    await db.query('TRUNCATE TABLE exercise_table');
    // console.log(x.rows);
    // return x.rows;

    const exerciseList = getExerciseObject();

    const l = 'lul';
    for(let i=0;i<exerciseList.length;i++)
    {
        const obj = exerciseList[i];
        console.log(chalk.blue.bgRed.bold('will try to insert: '),obj);

        console.log('INSERTING\n');
        const y = await db.query(
            'INSERT INTO exercise_table(eID, title,subtitle,guide,img_href,img_alt,pmusclegroup,equipment,target_muscle_img,target_muslce_alt) VALUES($1, $2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *',
            [obj.eID,obj.pageTitle,obj.pageSubTitle,obj.guide,obj.img.href,obj.img.alt,obj.pMuscleGroup,obj.equipment,obj.targetMuscleImg?.src,obj.targetMuscleImg?.alt]
        )

        console.log(chalk.green.bgWhite.bold('INSERTED following: '));
        console.log(y.rows);
    }
    // const y = await db.query('INSERT INTO exercise_table ')

    
    }catch(e){
        // throw e;
        console.log(chalk.red('ERROR happened\n'));
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