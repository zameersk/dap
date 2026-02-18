const Review = require('../models/Review');

exports.getReviews = async (req, res) => {
    const reviews = await Review.find({ bookId: req.params.bookId });
    res.json(reviews);
}

exports.addReview = async (req, res) => {
    const review = new Review({
        bookId: req.params.bookId,
        ...req.body
    });

    await review.save();
    res.status(201).json(review);
}