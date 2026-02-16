require('dotenv').config()
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const controller = require('./controllers/book.controller')

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.get('/', controller.searchBooks);

const PORT = process.env.PORT ?? 4002;
app.listen(PORT, () =>
  console.log(`🔎 Search Service running on port ${PORT}`)
);
