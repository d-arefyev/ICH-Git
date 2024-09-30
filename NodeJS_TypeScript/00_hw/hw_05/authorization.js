import http from 'http';

// Create the server using the http.createServer() method
const server = http.createServer((req, res) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    // If the Authorization header is missing, send a 401 Unauthorized response
    res.statusCode = 401;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Unauthorized');
  
  } else {
    // If the Authorization header is present, send a 200 OK response
    console.log('Authorization header:', authHeader);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Authorization header received');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Works only when entering a token in Postman/Headers: Authorization     Bearer your-token