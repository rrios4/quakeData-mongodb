const mongoose = require('mongoose');

const octoberQuakeSchema = new mongoose.Schema({
  time: {
    type: String,
    default: Date()
  },
  latitude: {
    type: String,
    default: null
  },
  longitude: {
    type: String,
    default: null
  },
  depth: {
    type: String,
    default: null
  },
  mag: {
    type: String,
    default: null
  },
  magType: {
    type: String,
    default: null
  },
  nst: {
    type: String,
    default: null
  },
  gap: {
    type: String,
    default: null
  },
  dmin: {
    type: String,
    default: null
  },
  rms: {
    type: String,
    default: null
  },
  net: {
    type: String,
    default: null
  },
  id: {
    type: String,
    default: Date()
  },
  updated: {
    type: String,
    default: null
  },
  place: {
    type: String,
    default: null
  },
  horizontalError: {
    type: String,
    default: null
  },
  depthError: {
    type: String,
    default: null
  },
  magError: {
    type: String,
    default: null
  },
  magNst: {
    type: String,
    default: null
  },
  locationSource: {
    type: String,
    default: null
  },
  magSource: {
    type: String,
    default: null
  }
});

// This converts the id from an object to a string andd gets rid of two things
octoberQuakeSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    }
  });

  module.exports = mongoose.model('octoberQuakes', octoberQuakeSchema);
  