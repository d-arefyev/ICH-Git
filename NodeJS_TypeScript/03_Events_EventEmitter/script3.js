const EventEmitter = require('events');
const emitter = new EventEmitter();

//      Регистрирует сb который выполнится только 1 раз
emitter.once('connect', () => {
    console.log('Connected first time!');
})

emitter.emit('connect');
emitter.emit('connect');
