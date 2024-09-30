import express from 'express';
import connection from './db.js';

const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users(
        uniqId INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    )
`;
// ORM users.create(name, email); Sequelize ORM, Knex
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// {"key":"value"} JSON.stringify({"key":"value"}) JSON.parse("{"key":"value"}")

// Home Page
app.get('/', (request, response) => {
    try {
        response.send('Hello World!');
    } catch (e) {
        console.error(e.message);
        response.status(500).send('Internal Server Error');
    }
});

// Products Page
app.get('/products', (request, response) => {
    try {
        response.send('List of products');
    } catch (e) {
        console.error(e.message);
        response.status(500).send('Internal Server Error');
    } finally {
        // Опционально: действия, которые нужно выполнить в любом случае
    }
});

// Unique Product Page
app.get('/products/:id', (request, response) => {
    try {
        const productId = request.params.id;
        response.send(`Unique product with ID: ${productId}`);
    } catch (e) {
        console.error(e.message);
        response.status(500).send('Internal Server Error');
    }
});

app.get('/search', (req, resp) => {
    resp.send('Search route');
});

app.get('/json', (req, resp) => {
    const tmp = {
        user: null,
        age: null,
        salary: null,
        gender: null
    }; // dto Data Transfer Object
    // 
    resp.json(tmp);
});

app.post('/submit', (req, res) => {
    // const { user, email } = req.body
    const userName = req.body.user;
    const email = req.body.email;

    // // Валидация email на наличие @ и . <- RegEx - (' " `) NB
    if (email.includes('@') && email.includes('.')) {
        res.send(`User: ${userName} Email: ${email}`);
    } else {
        res.status(400).send('Invalid email format. Email must contain "@" and "."');
    }
});

// Connect DB
app.get('/weather', (req, res) => {
    const query = 'SELECT * FROM weather';
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching users', error.stack);
            res.status(500).send('Error fetching users');
            return;
        }
        res.json(results);
    })
})

app.use((error, req, res, next) => {
    console.error(error.stack); // Логирует стек ошибки
    console.error(error.message); // Логирует сообщение ошибки
    res.status(500).send('Something went wrong!'); // Отправляет ответ с кодом 500
});

// ...
// next() ..

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});







// export class LoginUserRequest {
//     public username: string;
//     public password: string;
//     public role: string | undefined;
// }

// Promise
// then catch                try catch
// const promise = new Promise((resolve, reject) => { });
// promise.then((response) => { response.json() }).then().then().then().catch().finally();
// fetch().then((response) => response.json())
// try {

// } catch (e) {

// } finally {

// }