import http from 'http';

// Create the server using the http.createServer() method
const server = http.createServer((req, res) => {

  // Check the HTTP method of the incoming request
  if (req.method === 'PUT') {
    // Handle PUT request
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('PUT request processed');

  } else if (req.method === 'DELETE') {
    // Handle DELETE request
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('DELETE request processed');

  } else {
    // Handle other request methods
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Method Not Allowed');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Put and Delete requests work in Postman