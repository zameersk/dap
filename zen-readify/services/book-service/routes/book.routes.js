const router = require('express').Router();
const Book = require('../models/Book');

router.get('/', async (_, res) => {
  res.json(await Book.find());
});

router.get('/:id', async (req, res) => {
  res.json(await Book.findById(req.params.id));
});

module.exports = router;
