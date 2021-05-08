 const dotenv =  require('dotenv');
 dotenv.config({ path: './config.env' });
const { json } = require('express');
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
var cookieParser = require('cookie-parser');



// PORT
const PORT = process.env.PORT;

// DATABASE s
require('./src/db/conn');
const User = require('./src/models/user');
app.use(cookieParser());

app.use(json());
 app.use(express.urlencoded({ extended: false }));
app.use(require('./src/router/auth'));



app.listen(PORT , ()=>{console.log(`Server Running on Port: http://localhost:${PORT}`)});