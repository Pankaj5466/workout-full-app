const db = require("./db");
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const getExerciseObject = () =>{
    const filePath  = path.join(__dirname, '/data') + '/excercise-object.js';

    const file = fs.readFileSync(filePath,'utf-8');
    const list = JSON.parse(file);
    // console.log(list);

    return list;
}


const update = async () =>{

    // await db.query('TRUNCATE TABLE exercises');

    const exerciseList = getExerciseObject();
    const flatArray=(arr)=>{
        if(arr.length == 0)
            return '';
        return arr.reduce((p,c)=>p+";"+c);
    }

    for(let i=0;i<exerciseList.length;i++)
    {
        const obj = exerciseList[i];
        console.log(chalk.blue.bgRed.bold('INSERTING : '),obj.eID);

        const ex = {
            id:obj.eID,
            title:obj.pageTitle,
            subtitle:obj.pageSubTitle,
            guide:obj.guide.length==0 ? "": obj.guide.reduce((prev,curValue) => prev + "," +curValue ),
            src:''
        }

        
        try{
            const y = await db.query(
                'INSERT INTO exercise(id, title,subtitle,guide,src)\
                 VALUES($1, $2,$3,$4,$5) RETURNING *',
                [ex.id,ex.title,ex.subtitle,ex.guide,ex.src]
            )

            /*
            console.log(chalk.green.bgWhite.bold('INSERTED following: '));
            console.log(y.rows);
            */
        }catch(e){
            // throw e;
            console.log(chalk.red('ERROR happened\n'));
            console.log(e);
        }
    }//for loop ends here 
   
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

/*

INSERT INTO exercises(id, title,subtitle,guide,img,primary_muscle_group,equipment,target_muscle
                    , target_muscle_img,difficulty_level,video,source,user_rating)
VALUES(123,'','','','','','','','','','','',0)
*/