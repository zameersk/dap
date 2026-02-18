const router = require('express').Router();
const controller = require('../controller/book.controller')

router.get('/', controller.getAllBooks);

router.get('/:id', controller.getBook);


module.exports = router;
