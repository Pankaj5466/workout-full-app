const axios = require('axios');
const { getWorkoutPageURL } = require('./url-config');
const fs = require('fs');
const { fileURLToPath } = require('url');
const {readWorkoutHTML} = require('./single-workout');
const path = require('path');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const getAllWorkoutHtmlData = async (URL,excerciseList) => {
    console.log("URL: ", URL);

    const data = await axios.get(URL, {

    });

    const html = data.data;

    const dom = new JSDOM(html);
    const document = dom.window.document;

    //    const element = document.querySelector('main_info');

    const element = document.getElementsByClassName('entry')

    for (let i = 0; i < element.length; i++) {
       const pageURL = element[i].getElementsByClassName('actions')
                        [0].querySelector('a')
                        .getAttribute('href');

        // console.log(`PageURL = ${pageURL}`);

        excerciseList.push(pageURL);
    }
}

const downloadHTML =async(url)=>{
    console.log(url);
    
    try{
        const data = await axios.get(url);
        const html = data.data;

        const fileName = path.join(__dirname + '/exercise-html-downloads/') +  url.split('/').at(-2);
        
        fs.writeFileSync(`${fileName}.html`,html);
        /*
        fs.writeFile(`${fileName}.html`,html,()=>{
           
        });
        */

    }catch(e){
        console.log(`ERROR is download of ${url}`);
        console.log(e);
    }
}


const downloadExcerciseURLList = async () => {
    
    const excerciseList = [];
    for (let i = 1; i < 72; i++) {

        try{

            await getAllWorkoutHtmlData(getWorkoutPageURL(i) , excerciseList);

        }catch(e){
            console.log(`Error happended during getting of excercise of page ${i}\n`);
        }

    }//for loop end

    console.log("Excercise List is\n");
    console.log(excerciseList);

    fs.writeFileSync('all-excercise-url.js',JSON.stringify(excerciseList),()=>{
        console.log("All excercise data written to all-excercise-url.js");
    });
}

const main = async() =>{
    // var listExist = false;
    // if(listExist === false)
        // await downloadExcerciseURLList();

    
        const filePath  = path.join(__dirname) + '/all-excercise-url.js';
        
        const file = fs.readFileSync(filePath);
        const list = JSON.parse(file);
        console.log(list[0].split('/').at(-2));


        for(let i=0;i<2;i++)
            await downloadHTML(list[i]);
        
        console.log("Success is savign all HTML\n");
    


    const fileList = fs.readdirSync( path.join(__dirname) +  '/exercise-html-downloads/');

    let workoutData = [];
    for(let i=1;i<fileList.length;i++)
    {
        const filePath =  path.join(__dirname, '/exercise-html-downloads/') +  fileList[i];
        // console.log(`filePath = ${filePath}`);

        try{

            const obj = await readWorkoutHTML(filePath);
            workoutData.push(obj);
        }
        catch(e){
            console.log("ERROR happened in reading of ",fileList[i]);
        }    
    }

    fs.writeFile('excercise-object.js',JSON.stringify(workoutData),()=>{});
    console.log(workoutData.at(-1));




}

listExist = true;
main();

