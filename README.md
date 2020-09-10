# form-nodejs-gcloud
# It a simple web application which help in understandind full stact development
**For Forntend**  
1. HTML
2. JS

**For Backend**  
1. Nodejs  
2. Express  
3. Google cloud App Engine  
4. CLoud-MySQl  

**Step 1: create a new directory**  
```sh
$ mkdir node-app
```  
**Step 2: Initialize your Directory using**  
```sh
$ npm init
```  
**Step 3: Install node Modules and some Important modules like express,mysql,body-parser,dotenv**  
```sh
$ npm i node-modules express mysql body-parser dotenv path
```
**Step 4: now make a app.js**  
```sh
$ touch app.js 
``` 
**Step 5: copy this code **  
```sh
const express = require('express')
const app = express();
app.get('/',(req,res)=>{
    res.send("its working");
    res.end();
})
app.listen(8080,()=>{
    console.log('app is listen on port number 8080');
});
```

**Step 5: Lets test the previous steps **   
```sh
npm app.js
```  
![image](https://user-images.githubusercontent.com/51235172/92493506-38882100-f212-11ea-827a-e04e6d65f706.png)  
![image](https://user-images.githubusercontent.com/51235172/92500590-f9aa9900-f21a-11ea-89ca-9f7b2c59e092.png)  
**Step 6: make views directory which contains all the view pages like: index.html in our case. Make index.html file in views directory and make a simple form in index.html**
```sh
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="upload" method="POST">
        <label for="name">Name</label>
        <input type="text" id="name" name="name">
        <label for="email">Email</label>
        <input type="text" id="email" name="email">
        <input type="submit">
    </form>
</body>
</html>
```  
**Step 7: To make app.js send index.html on user requesting '/' and response to '/upload' req. we have make some change in app.js**
```sh
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
```  
```sh
node app
```
![image](https://user-images.githubusercontent.com/51235172/92503365-c7029f80-f21e-11ea-9cdc-9eca99adccdb.png)
![image](https://user-images.githubusercontent.com/51235172/92503279-a4708680-f21e-11ea-9cb8-b28b20cc0378.png)  
**Step 8: Next step is Deployment of you App. For this purpose Iam using Google cloud app Engine. Make your Account and setup billing. Then make project in https://console.cloud.google.com/. Go to app engine dashboard create app engine instance and setup gcloud in your local machine. Create app.yaml file which specifies the app engine runtime. let deploy app using**
![image](https://user-images.githubusercontent.com/51235172/92746040-83d03a00-f3a0-11ea-83f2-826a23d76316.png)  
```sh
$ gcloud app deploy
```  
Use this to locate your App
```sh
$ gcloud app browse
``` 
**Step 9: Lets Connect App with Database. Here Iam using Gcloud My-sql database. go to sql dashboard create a instance . I recommend to use this link->https://cloud.google.com/sql/docs/mysql/quickstart. AND use use this link->https://cloud.google.com/sql/docs/mysql/quickstart-proxy-test to connect gcloud sql database to localmachine for local testing **
**Step 10: Create Database.js and make some changes in app.js**
![image](https://user-images.githubusercontent.com/51235172/92748526-df9bc280-f3a2-11ea-90b5-f1d4c8bc034a.png)
![image](https://user-images.githubusercontent.com/51235172/92748612-f3472900-f3a2-11ea-8cbf-022af8651722.png)  
**Step 11: Change YOUR_CONNECTION and other details with your instances details.**  
run app via node start.  
##THANK YOU SO MUCH




