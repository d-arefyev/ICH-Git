import http from 'http';

const server = http.createServer((req, res) => {

  if (req.method === 'POST') {
    if (req.url === '/submit') {
      res.statusCode = 201;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Форма отправлена!');
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Not found');
    }
  } else
    if (req.method === 'GET') {
      if (req.url === '/') {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200;
        res.end('Root endpoint');
      } else
        if (req.url === '/about') {
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 200;
          res.end(JSON.stringify({ key: 'value' }));
        } else
          if (req.url === '/contact') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<div> <h1>Hello World!</h1> some aweasome HTML</div>');
          } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Not found');
          }
    } else {
      res.statusCode = 405;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Метод не разрешен');
    }
});

server.listen(3000, 'localhost', () => {
  console.log(`Server running on http://localhost:3000`);
});
