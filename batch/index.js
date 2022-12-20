const axios = require('axios');
const URL = require('./url-config');
const fs = require('fs');
const { fileURLToPath } = require('url');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

console.log("Start the Application");

const getWorkoutData = async (URL) =>{
    console.log("URL: ",URL);

    try
    {
       const data = await axios.get(URL,{

       });

       const html = data.data;
       fs.writeFile('received-file.html',html,()=>{
            console.log("Wrote received data to file\n");
       });

       const dom = new JSDOM(html);
       const document = dom.window.document;

    //    const element = document.querySelector('main_info');

    const element = document.getElementsByClassName('entry');
       console.log("element is\n");
       
      for(let i=0;i<element.length;i++)
      {
        console.log(`${i} th element is: `,element[i].innerHTML);
      }

    }catch(e)
    {
        console.log("Error Happed during workout get")
    }
}



getWorkoutData(URL);