const express = require('express');
const mountRoutes = require('./routes/index.js') //IMP: will call the exported function via this name
const {entryLogger} = require('./middleware/entry-logger');
const {exitLogger} =  require('./middleware/entry-logger');

const cookieSession = require('cookie-session');
// const cookieParser = require('cookie-parser'); //no need as we will use cookie-session (to store session data on server side)

const app = express();
const port = process.env.PORT || 8080;


app.use(express.json());

//cookie-handling middleware REF: http://expressjs.com/en/resources/middleware/cookie-parser.html
app.use(cookieSession({ //server side cookie data save, with cookie-id saved in client side
    name: 'session',
    keys: ['key1', 'key2']
  }))
  /*
Use it like
req.session.uID = 123; //set 
console.log(req.session); //get
  */

// app.use(cookieParser()); //client side cookie-save
/*
  use it like:
    console.log('cookie: ',req.cookies); //get
    console.log('Signed Cookies: ', req.signedCookies);
    res.cookie('uID',1234); //set 
*/

app.use(entryLogger);
app.use(exitLogger);


// app.use(userRouter); //use routes defined passed to express
mountRoutes(app);



app.listen(port, () => {
    console.log(`server is up and running on port ${port}`);
})
