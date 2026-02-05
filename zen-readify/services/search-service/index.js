const express = require('express');
const axios = require('axios');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.get('/api/search', async (req, res) => {
  const { q = '', genre = '' } = req.query;

  try {
    const { data: books } = await axios.get(
      'http://localhost:4001/api/books'
    );

    const results = books.filter(book => {
      const matchesText =
        book.title.toLowerCase().includes(q.toLowerCase()) ||
        book.author.toLowerCase().includes(q.toLowerCase());

      const matchesGenre =
        !genre || book.genre === genre;

      return matchesText && matchesGenre;
    });

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Search failed' });
  }
});

const PORT = 4002;
app.listen(PORT, () =>
  console.log(`🔎 Search Service running on port ${PORT}`)
);
