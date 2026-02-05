// models/Book.js
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  category: String,
  description: String,
  imageUrl: String
});

module.exports = mongoose.model('Book', BookSchema);
