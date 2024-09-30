import mysql from 'mysql2'

// Создать 'конект' к базе данных
const connection = mysql.createConnection({
    host: 'ich-db.edu.itcareerhub.de',
    user: 'ich1',
    password: 'password',
    database: 'hr'
})

// Создать 'конект' к базе данных Docker
// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'pw',
// })


connection.connect((error) => {
    if (error) {
        console.log(`Error connection database `, error.stack);
        return;
    }
    console.log('Connected to the database ' + connection.threadId)
})

export default connection;