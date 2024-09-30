import connection from './db.js';

const createTable = `
    CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL
    )
`;

connection.query(createTable, (err, results) => {
    if (err) {
        console.error('Error creating table:', err.message);
    } else {
        console.log('Table created successfully:', results);
    }
    connection.end();
});
