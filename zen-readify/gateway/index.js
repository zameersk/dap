const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/books', proxy('http://localhost:4001'));
app.use('/api/search', proxy('http://localhost:4002'));
app.use('/api/reviews', proxy('http://localhost:4003'));
app.use('/api/categories', proxy('http://localhost:4004'));

app.get('/health', (_, res) => res.send('Gateway OK'));

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`🚪 API Gateway running on port ${PORT}`)
);
