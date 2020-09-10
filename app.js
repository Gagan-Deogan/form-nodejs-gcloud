'use strict';
const yenv = require('yenv');
const env = yenv('app.yaml',{ env:'env_variables' });
const express = require('express')
const app = express();
const connection = require('./database')
// For path
const path = require('path');

// Decodes post data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:'false'}));

// Get req handler
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/index.html'));
})
// Post req handler
app.post('/upload',(req,res)=>{
    let sql_data = [[req.body.name]];
    connection.query("INSERT INTO form(name) VALUES ?",[sql_data],(err,res)=>{
        if(err){
            console.log(err);
        }else{
            console.log('inserted');
        }
    });
    res.send('its working till step 12 you did a great job');
});

app.listen(env.AA,()=>{
    console.log('app is listen on port number 8080');
});