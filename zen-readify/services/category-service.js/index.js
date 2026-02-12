const express = require('express');
const axios = require('axios');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.get('/', async (_, res) => {
  try {
    console
.log('Fetching books for categories...');

    const {data:books} = await axios.get(
      'http://localhost:4001'
   );

    const categories = [...new Set(books.map(b => b.category))];

    res.json({
      categories
    });
  } catch (err) {
    console.error('Error fetching categories:', err.message);
    res.status(500).json({ message: 'Category fetch failed' });
  }
});

const PORT = 4004;
app.listen(PORT, () =>
  console.log(`🏷 Category Service running on port ${PORT}`)
);
