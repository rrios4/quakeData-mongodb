const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const quakeDB = require('../models/quakedb');

//get a list of octoberquakes from the database
router.get('/octoberquakes',(request, response) => {
    quakeDB.find({}).then(octoberquake => {
      response.json( octoberquake);
    });
});

// add a new quake to the database
router.post('/octoberquakes',(request, response, next) => {
    quakeDB.create(request.body).then(function(octoberquakes){
        response.send(octoberquakes);
    }).catch(next);
});

// update a quake from the database
router.put('/octoberquakes/:id',(request, response, next) => {
    
});

// delete a quake from the database
router.delete('/octoberquakes/:id', (request, response, next) => {

});

router.post('/saveQuake', (request, response, next) => {
    const body = request.body;
    if(body.content === undefined) {
        return response.status(400).json({error:'content missing'})
    };

    const quake = new quakeDB({

    });

    quake.save().then(savedQuake => {
        response.json(savedQuake);
    });
});

module.exports = router;