 const dotenv =  require('dotenv');
const { json } = require('express');
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
var cookieParser = require('cookie-parser');



// PORT
const PORT = process.env.PORT | 3000;

dotenv.config({ path: './config.env' });
// DATABASE 
require('./src/db/conn');
const User = require('./src/models/user');

app.use(json());
app.use(require('./src/router/auth'));
app.use(cookieParser());



app.listen(PORT , ()=>{console.log(`Server Running on Port: http://localhost:${PORT}`)});