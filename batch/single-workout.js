const axios = require('axios');
const URL = require('./url-config');
const fs = require('fs');
const { fileURLToPath } = require('url');

const jsdom = require("jsdom");
const { getEnabledCategories } = require('trace_events');
const { connected } = require('process');
const { html } = require('parse5');
const { JSDOM } = jsdom;

const readWorkoutHTML = async (fileName) =>{
    try
    {
       
       const file = fs.readFileSync(fileName,'utf-8');
       const  html = file;


       const dom = new JSDOM(html);
       const document = dom.window.document;

       let ex= {};

       //Extract Excercise ID
       ex.eID = document.querySelector('article')
                        .id.split('-')[1]; 
                         //TO-DO: find why .at need polyfilling

        ex.pageTitle = document.getElementsByClassName('page_title')
                        [0].innerHTML.trim();
        ex.pageSubTitle = document.getElementsByClassName('page_subtitle')
                            [0].innerHTML.trim();

        let guide = [];
        try{
            guide = document.getElementsByClassName('sc85_bullet_list')
                            [0].getElementsByTagName('li');
        }
        catch(e){
            
        }
        
        guide = document.querySelectorAll('.sc85_bullet_list li')
        // console.log("guide.length is :: ", guide.length);
        ex.guide = [];
        if(guide?.length !== undefined)
        {
            for(let i=0;i<guide.length;i++)
            {
                ex.guide.push(guide[i].textContent.trim()
                            // .replace(/\n/g, " ")
                            // .replace(/\t/g,'')
                            );
            }
        }

        ex.img = {};
        ex.img.href  = document.getElementsByClassName('exercise_thumbnail')
                            [0].querySelector('a')
                            .getAttribute('href');
        ex.img.alt = document.getElementsByClassName('exercise_thumbnail')
                            [0].querySelector('img')
                            .getAttribute('alt');
        

        ex.pMuscleGroup = [];
        const primaryMuscleGroupList  = document.getElementsByClassName('muscle_groups')
                                    [0].getElementsByClassName('group-content')
                                    [0].querySelectorAll('li')
                            
        for(let i=0;i<primaryMuscleGroupList.length;i++)
        {
            ex.pMuscleGroup.push(primaryMuscleGroupList[i].textContent); //IMP: <li><spn>Leg</span></li> for this, to extract justhe etext content, use node.textContent
        }

        ex.equipment = [];
        const equipment = document.getElementsByClassName('equipments')
                            [0].querySelectorAll('li');
        
        for(let i=0;i<equipment.length;i++)
            ex.equipment.push(equipment[i].textContent);
        
        //TO-DO: find and populate difficulty (some element may not have it, so put default for them)

        ex.targetMuscle = [];
              
        const targetMuscle = document.getElementsByClassName('vc_progress_bar')
                                [0]?.getElementsByClassName('vc_general');
        if(targetMuscle !== undefined)
        {
            for(let i=0;i<targetMuscle?.length;i++)
            {
                const name = targetMuscle[i].getElementsByClassName('vc_label')
                                    [0].textContent;
                const percentage = targetMuscle[i].getElementsByClassName('vc_bar')
                                    [0].getAttribute('data-value');
                ex.targetMuscle.push({
                    name,
                    percentage
                })
            }

            ex.targetMuscleImg = {};
            const element = document.getElementsByClassName('vc_single_image-wrapper')
                                    [0]?.querySelector('img');
            // console.log("IMG element is\n",element);

            ex.targetMuscleImg.src = element.getAttribute('src');
            ex.targetMuscleImg.alt = element.getAttribute('alt');
            ex.targetMuscleImg.title = element.getAttribute('title');
        }                    
        // printCollection(primaryMuscleGroupList);

       return ex;
      

    }catch(e)
    {
        throw e;
    }
}


const printCollection=(hCollection)=>{
    console.log("Printing collection\n");
    for(let i=0;i<hCollection.length;i++)
        console.log(hCollection[i]);
    console.log();
}





/* singee_wk_details.js file */
/* 
const singelExDetails = {
    eID:'unique-id', //<article id="exercise-12447"
    swapEnable:"true|false", //IF Enabled => this will be swapped to some excercise of similar category
    page_title:'' , //page_title
    page_subtitle:'', //page_subtitle
    guide:[li1,li2], //sc85_bullet_list (array of list-item)

    img: {href,alt}, // exercise_thumbnail

    pMuscleGroup:['leg'], //(D) //filter <- get all list first for all filter
    //Second add if needed
    equipment:["Bench",'R'], //equipments //filter
    difficulty:[], //filter

    targetMuscle:[{name:'xyz',percentage:10}], //array of targetM (A)
    targetMuscleImg:{xyz , url, name}, //(B)

    //.. IMP: add extract data if needed
    //any new item created must match to, or iintroduce some new info

    //exercise_content
}

//Single Page Extracting
/*

(A) Extracting target_m:  
class = "vc_progress_bar" -> class = "vc_general" 
-> {vc_lable(text),vc_bar(data-value)}

(B) vc_single_image-wrapper -> extract {src,alt,title}

(C) exercise_thumbnail {href,src,alt}

(D) muscle_groups


const singleDay = [singelWkDetails1, singelWkDetails2]

const wkPlan = [singelDay1,singleDay2,singleDay3]; //Complete plan , consisting of multiple day
// <- pass this whole object during edit/creation




/*
APIs:

getAllWorkoutData(uID)

EditWorkoutData(wID,wDetails) -> return status of operation
CreateWorkout(wDetails) -> return wID
enableSimilaryWorkoutSwap(uID,wID,eID) -> status

getTodayWorkout(uID,wID) -> return dayWorkout after swap of enabled workout 

*/

/* Frontend has swap with similar workout option also, when creating new workout */

/*

User WorkoutData
userWorkoutData = [{excerciseID:'123', userExcerciseData:''}]

userExcerciseData = modificationin on eID + eDuration, eTime, swapAble?, 

*/

module.exports = {readWorkoutHTML};