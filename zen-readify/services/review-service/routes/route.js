const router = require('express').Router();
const controller = require('../controller/review.controller');

router.get('/:bookId', controller.getReviews);
router.post('/:bookId', controller.addReview);

module.exports = router;