const mysql = require('mysql');
const yenv = require('yenv');
const env = yenv('app.yaml',{ env:'env_variables' });
// database connection for production mode
// let config = {
//     user: env.USER_NAME,
//     database: env.YOUR_DATABASE_NAME,
//     password: env.PASSWORD,
// }
// config.socketPath = `/cloudsql/${env.YOUR_CONNECTION_NAME}`;
// let connection = mysql.createConnection(config);

// database connection for development mode
let connection  = mysql.createConnection({
    connectionName: env.YOUR_CONNECTION_NAME,
    user: env.USER_NAME,
    password: env.PASSWORD,
    database: env.YOUR_DATABASE_NAME,
    host: env.HOST,
    port: env.PORT
});
connection.connect((err)=>{
    if(err) console.log('ERROR'+err.stack);
    else console.log('Connected as thread id: ' + connection.threadId);
});

module.exports = connection;