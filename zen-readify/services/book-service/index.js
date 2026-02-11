const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const bookRoutes = require('./routes/book.routes');

const app = express();

/* =====================
   Database
===================== */
const MONGO_URI = 'mongodb+srv://zameers932_db_user:KViYhtRzWTbH5Go8@cluster0.qs3hsjb.mongodb.net/?appName=Cluster0y';

mongoose.connect(MONGO_URI)
  .then(() => console.log('📚 Book Service connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection failed', err);
    process.exit(1);
  });


/* =====================
   Middleware
===================== */
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

/* =====================
   Routes
===================== */
app.use((req, res, next) => {
  console.log(`📘 Book Service received request: ${req.method} ${req.url}`);
  next();
});   
app.use('/', bookRoutes);


/* =====================
   Server
===================== */
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`📘 Book Service running on port ${PORT}`);
});
