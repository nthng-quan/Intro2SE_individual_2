const express =  require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

mongoose.set('strictQuery', true);

const port = 3000;

// ROUTES
app.get('/', (req, res) => { 
    res.send('Hello World!');
});

// connect to DB
mongoose.connect(
    process.env.MONGODB_CSTRING, () => { 
    console.log('connected to DB!');
});


// Listen
app.listen(port);