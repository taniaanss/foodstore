const dotenv = require ('dotenv');
dotenv.config();

const path = require('path');

console.log(process.env.SERVICE_NAME);

module.exports= {
    serviceName : process.env.SERVICE_NAME,
    rootPath: path.resolve(__dirname, '..'),
    
    secretKey: process.env.SECRET_KEY,
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPort: process.env.DB_PORT,
    dbPass: process.env.DB_PASS,
    dbName: process.env.DB_NAME
}