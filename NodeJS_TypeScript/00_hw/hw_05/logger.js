import http from 'http';
import fs from 'fs';

// Create the server using the http.createServer() method
const server = http.createServer((req, res) => {
  try {
    // Intentionally throw an error for testing purposes
    throw new Error('This is a test error');

    // Normal request handling (will not be reached due to the error above)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Request processed successfully');

  } catch (error) {
    // Log the error message to errors.log
    const errorMessage = `${new Date().toISOString()} - ${error.message}\n`;
    fs.appendFile('errors.log', errorMessage, (err) => {
      if (err) console.error('Failed to write to log file:', err);
    });

    // Respond with 500 Internal Server Error
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

