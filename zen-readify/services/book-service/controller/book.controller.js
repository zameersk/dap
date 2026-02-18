const Book = require('../models/Book');

exports.getAllBooks = async (_, res) => {
    console.log('Fetching all books');
    res.json(await Book.find());
}

exports.getBook = async (req, res) => {
  try {
    res.json(await Book.findById(req.params.id).exec());
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: 'Internal Server Error'
    })
  }
}