const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();
require('./dbCon');

const bookRoutes = require('./routes/book.routes');



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
