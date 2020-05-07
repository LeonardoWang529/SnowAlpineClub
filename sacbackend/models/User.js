const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: false,
  },
  lastname: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  avatar: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = User = mongoose.model('users', UserSchema);
