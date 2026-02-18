const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();
require('./dbCon');

const routes = require('./routes/route');


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/', routes);


const PORT = process.env.PORT ?? 4003;
app.listen(PORT, () =>
  console.log(`📝 Review Service running on port ${PORT}`)
);
