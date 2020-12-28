const mongoose = require('mongoose');

if(process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1);
}

const password = process.argv[2];

const url = ``;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const octoberQuakeSchema = new mongoose.Schema({
    time: String,
    latitude: String,
    longtitude: String,
    depth: String,
    mag: String,
    magType: String,
    nst: String,
    gap: String,
    dmin: String,
    rms: String,
    net: String,
    id: String,
    updated: String,
    place: String,
    horizontalError: String,
    depthError: String,
    magError: String,
    magNst: String,
    locationSource: String,
    magSource: String
});

const OctoberQuake = mongoose.model('octoberQuakes', octoberQuakeSchema);


// This is used for making an object in javascript that mongoose will use with the schema to send to the db for storage.
// I must have model in order to save and seach from db
const quake = new OctoberQuake({
    
    /*time: new Date(),
    latitude: 'test',
    longtitude: 'test',
    depth: 'test',
    mag: 'test',
    magType: 'test',
    nst: 'test',
    gap: 'test',
    dmin: 'test',
    rms: 'test',
    net: 'test',
    id: 'test',
    updated: 'test',
    place: 'This is a test location!',
    horizontalError: 'test',
    depthError: 'test',
    magError: 'test',
    magNst: 'test',
    locationSource: 'test',
    magSource: 'test',*/
});
/*
quake.save().then(result =>{
    console.log('Test Quake Has Been Saved!!!');
    mongoose.connection.close();
});*/

OctoberQuake.find({}).then(results => {
    results.forEach(quake => {
        console.log(quake);
    });
    mongoose.connection.close();
});
