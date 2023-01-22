setup index.js
setup userRoute
(See word-app for reference for above steps)

Install nodemon & change package.json file for live update (https://www.npmjs.com/package/nodemon)

install pg (https://node-postgres.com/)

- MIDDLEWARE
use middleware to enable loggining.
use `res.on("finish",()=>{})` to do something when the its time to return the response
- See all such methode & attribute in req & res object

- cookie-parser vs session-cookie middleware for cookie (see express middleware of their individual exploration)
cookie-parser will store the (key,value) pair on client browser.
Where session-cookie, will just store the (key,value) of session id to client & all other (key,value) will be store on server side for better security.