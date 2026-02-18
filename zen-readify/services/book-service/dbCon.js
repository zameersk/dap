const mongoose = require('mongoose');

/* =====================
   Database
===================== */
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(String(MONGODB_URL))
  .then(() => console.log('📚 Book Service connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection failed', err);
    process.exit(1);
  });