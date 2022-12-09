const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());
// Import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

mongoose.set('strictQuery', true); 

const port = 5000;

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