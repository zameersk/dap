const router = require('express').Router();
const Book = require('../models/Book');
require('../models/Review')

router.get('/', async (_, res) => {
  console.log('Fetching all books');
  res.json(await Book.find());
});

router.get('/:id', async (req, res) => {
  try {
    res.json(await Book.findById(req.params.id).populate('reviews').exec());
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error:'Internal Server Error'
    })
  }
});

module.exports = router;
