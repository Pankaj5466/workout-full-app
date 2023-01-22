const express = require('express');
const mountRoutes = require('./routes/index.js') //IMP: will call the exported function via this name
const {entryLogger} = require('./middleware/entry-logger');
const {exitLogger} =  require('./middleware/entry-logger');

const app = express();
const port = process.env.PORT || 8080;


app.use(express.json());
app.use(entryLogger);
app.use(exitLogger);

// app.use(userRouter); //use routes defined passed to express
mountRoutes(app);



app.listen(port, () => {
    console.log(`server is up and running on port ${port}`);
})
