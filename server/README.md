setup index.js
setup userRoute
(See word-app for reference for above steps)

Install nodemon & change package.json file for live update (https://www.npmjs.com/package/nodemon)

install pg (https://node-postgres.com/)

- MIDDLEWARE
use middleware to enable loggining.
use `res.on("finish",()=>{})` to do something when the its time to return the response
- See all such methode & attribute in req & res object