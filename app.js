const express = require('express');
const mongoose = require('mongoose');
const app = express();
const UserRoute = require('./Routes/users');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
dotenv.config();
//to parse the body of the request object
app.use(bodyParser.json());
//connecting to mongodb data base and starting server
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log(`Connected to Database`);
    app.listen(process.env.PORT, () => {
        console.log(`Serving listening on port ${process.env.PORT}`);
    })
}).catch(err => {
    console.log('Failed Connecting to the Database' + err)
})
//route Handling
app.use('/user', UserRoute);
//404 Handling
app.use('',(req,res)=>{
    res.status(404).send('<html><body>404 Not Found</body></html>')
})