const { response, request } = require('express');
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('dotenv').config();

// Set-up express app
const app = express();

// Connect to the mongodb 
const url = process.env.MONGODB_URI;
console.log('Connecting to MONGODB Server... ', url);
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Connected to MongoDB');
    });

// Initialize the static folder
app.use('/', express.static('public'));

app.use(bodyParser.json());

// Initialize routes
app.use('/api',require('./routes/api'));

// Error handling middleware
app.use(function(err, request, response, next) {
    //console.log(err);
    response.status(442).send({error: err.message});
});


// Litsen for request
const PORT = process.env.PORT;
const link = 'http://localhost:3001'
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`${link}`)
});