import express from 'express';
import connection from './db.js';

const app = express();
const port = 3000;

// JSON parsing middleware
app.use(express.json());

// Route GET
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Route POST
app.post('/', (req, res) => {
    const data = req.body;

    if (!data) {
        return res.status(400).send('No data provided');
    }

    res.send('POST request processed');
});

// GET route to get all products
app.get('/products', (req, res) => {
    connection.query('SELECT * FROM products', (err, results) => {
        if (err) {
            return res.status(500).send('Database query error: ' + err.message);
        }
        res.json(results);
    });
});

// POST route to add a new product
app.post('/products', (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).send('Name and price are required');
    }

    const query = 'INSERT INTO products (name, price) VALUES (?, ?)';
    connection.query(query, [name, price], (err, results) => {
        if (err) {
            return res.status(500).send('Database insert error: ' + err.message);
        }
        res.send('Product successfully added');
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
