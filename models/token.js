// Load required packages
var mongoose = require('mongoose');

// TODO: implement a strong hashing scheme for the access token.

// Define our token schema
var TokenSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  clientId: {
    type: String,
    required: true
  }
});

// Export the Mongoose model
module.exports = mongoose.model('Token', TokenSchema);
