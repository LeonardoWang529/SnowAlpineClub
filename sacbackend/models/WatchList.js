const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WatchListSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  postid: {
    type: String,
    required: true,
  },
});

module.exports = WatchList = mongoose.model('watchlist', WatchListSchema);
