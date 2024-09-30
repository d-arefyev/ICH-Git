const EventEmitter = require('events');
const chatEmitter = new EventEmitter();

// Function for sending a message
function sendMessage(username, message, emitter) {
    emitter.emit('message', username, message);
}

// 'message' event handler
chatEmitter.on('message', (username, message) => {
    console.log(`${username}: ${message}`);
});

// Calls to sendMessage function with different users and messages
sendMessage('Alice', 'Hello, everyone!', chatEmitter);
sendMessage('Bob', 'Hi, Alice!', chatEmitter);
sendMessage('Charlie', 'Good to see you all!', chatEmitter);




/*
// Импортируем модуль 'events' из стандартной библиотеки Node.js
const EventEmitter = require('events');

// Создаем новый экземпляр EventEmitter. Этот объект будет использоваться для генерации и прослушивания событий.
const chatEmitter = new EventEmitter();

// Функция sendMessage принимает три параметра:
// - username: имя пользователя, отправляющего сообщение
// - message: текст сообщения
// - emitter: экземпляр EventEmitter, через который мы будем генерировать события
function sendMessage(username, message, emitter) {
    // Генерируем событие 'message', передавая в качестве данных имя пользователя и сообщение.
    // Это означает, что любой обработчик, зарегистрированный на событие 'message', получит эти данные.
    emitter.emit('message', username, message);
}

// Регистрируем обработчик для события 'message' на объекте chatEmitter.
// Когда событие 'message' будет сгенерировано, этот обработчик будет вызван.
// Обработчик принимает два параметра: username и message.
chatEmitter.on('message', (username, message) => {
    // Выводим сообщение в консоль в формате "User: Message".
    // Используем шаблонные строки для вставки значений переменных в строку.
    console.log(`${username}: ${message}`);
});

// Вызов функции sendMessage с различными данными
// Отправляем сообщение от пользователя 'Alice' с текстом 'Hello, everyone!' через chatEmitter
sendMessage('Alice', 'Hello, everyone!', chatEmitter);

// Отправляем сообщение от пользователя 'Bob' с текстом 'Hi, Alice!' через chatEmitter
sendMessage('Bob', 'Hi, Alice!', chatEmitter);

// Отправляем сообщение от пользователя 'Charlie' с текстом 'Good to see you all!' через chatEmitter
sendMessage('Charlie', 'Good to see you all!', chatEmitter);

*/