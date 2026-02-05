const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const Review = require('./models/Review');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/zen-readify')
  .then(() => console.log('📝 Review Service connected to MongoDB'));

app.get('/api/reviews/:bookId', async (req, res) => {
  const reviews = await Review.find({ bookId: req.params.bookId });
  res.json(reviews);
});

app.post('/api/reviews/:bookId', async (req, res) => {
  const review = new Review({
    bookId: req.params.bookId,
    ...req.body
  });

  await review.save();
  res.status(201).json(review);
});

const PORT = 4003;
app.listen(PORT, () =>
  console.log(`📝 Review Service running on port ${PORT}`)
);
