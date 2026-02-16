import  axios from 'axios';

const BOOK_SERVICE_URL = String(process.env.BOOK_SERVICE_URL) ?? 'http://localhost:4001';

export const searchBooks = async (req, res) => {

    const { q = '', genre = '' } = req.query;

    try {
        const { data: books } = await axios.get(
            BOOK_SERVICE_URL
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

}