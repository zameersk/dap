const express = require('express');
const axios = require('axios');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.get('/api/categories', async (_, res) => {
  try {
    const { data: books } = await axios.get(
      'http://localhost:4001/api/books'
    );

    res.json({
      bestSellers: books.filter(b => b.category === 'Best Seller'),
      newArrivals: books.filter(b => b.category === 'New Arrival'),
      editorsPicks: books.filter(b => b.category === "Editor's Pick")
    });
  } catch (err) {
    res.status(500).json({ message: 'Category fetch failed' });
  }
});

const PORT = 4004;
app.listen(PORT, () =>
  console.log(`🏷 Category Service running on port ${PORT}`)
);
