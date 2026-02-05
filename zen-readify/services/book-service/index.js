const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const bookRoutes = require('./routes/book.routes');

const app = express();

/* =====================
   Middleware
===================== */
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

/* =====================
   Routes
===================== */
app.use('/api/books', bookRoutes);

/* =====================
   Database
===================== */
const MONGO_URI = 'mongodb://localhost:27017/zen-readify';

mongoose.connect(MONGO_URI)
  .then(() => console.log('📚 Book Service connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection failed', err);
    process.exit(1);
  });

/* =====================
   Server
===================== */
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`📘 Book Service running on port ${PORT}`);
});
