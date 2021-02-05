var express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3008;

const appRoutes = require('./Routes/Restaurant');
app.use(bodyParser.json());
app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/', appRoutes);

mongoose.connect('mongodb+srv://hari:krishnan@cluster0.1wlxo.mongodb.net/testdb?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true})
.then(res => {
    app.listen(port, ()=>{
    console.log('server running 3008') 
    })
}).catch(err =>{
    console.log(err);
})