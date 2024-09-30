const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    if(req.url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Root page');
    } else if(req.url === '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('about page');
    } else if (req.url === '/contact'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('contacts page');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not found page');
    }
});

server.listen(5501, '127.0.0.1', () => {
    console.log('Running server on http://localhost:5501');
})