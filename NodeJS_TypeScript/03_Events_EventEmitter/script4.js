const EventEmitter = require('events');
const emitter = new EventEmitter();

// DRY
const handleReadFile = () => {
    console.log('File has been readed');
}

const handleWriteFile = () => {
    console.log('write file');
}

emitter.on('readFile', handleReadFile);
emitter.on('writeFile', handleWriteFile)
// emitter.removeListener('readFile', handleReadFile); // удаление одного события
emitter.removeAllListeners();                          // удаление всех событий

emitter.emit('readFile');
emitter.emit('writeFile');
