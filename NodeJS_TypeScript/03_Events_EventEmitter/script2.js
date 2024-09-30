const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('data', (info) => {
    info.created = new Date();
    console.log(`Data received: `, info);
})

emitter.emit('data', {id: 1, message: 'Hello World!'});
