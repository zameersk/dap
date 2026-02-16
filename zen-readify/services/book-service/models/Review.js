
const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  review: String,
  user: String
});

module.exports = mongoose.model('Review', ReviewSchema);