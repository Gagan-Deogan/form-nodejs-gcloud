const express = require('express')
const app = express();

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
    let data = req.body;
    console.log(data);
    res.send('its working till step 7 you did a great job');
});

app.listen(8080,()=>{
    console.log('app is listen on port number 8080');
});