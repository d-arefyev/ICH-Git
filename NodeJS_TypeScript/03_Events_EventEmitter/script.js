// EventEmitter
// Это встроенный класс в Node.js, который позволяет работать с событиями.

const EventEmitter = require('events');
const emitter = new EventEmitter();

//      название event    cb => callback 
emitter.on('greet', () => {
    console.log('Hello World!');
});

emitter.on('click', () => {
    console.log('Click click click');
})

emitter.emit('click');
emitter.emit('greet');
emitter.emit('greet');
emitter.emit('greet');
