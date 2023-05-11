
require('dotenv').config();
const express = require('express');
const port = 4100;
const app = express();

const URL = require('./config/mongoose');

app.listen(port,(err)=>{
    if(err){
        console.log('Error While Connecting To Server',err);
        return;
    }
    console.log('Server Connected On Port',port);
});