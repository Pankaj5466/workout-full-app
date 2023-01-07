const { application } = require('express');
const express = require('express');
const userRouter = require('./src/routes/userRoute')


const app = express();
const port = process.env.PORT || 8080;


app.use(express.json());
app.use(userRouter); //use routes defined passed to express

app.listen(port, () => {
    console.log(`server is up and running on port ${port}`);
})
