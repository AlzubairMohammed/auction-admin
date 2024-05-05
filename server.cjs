const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
 // Set the content type to HTML
 res.setHeader('Content-Type', 'text/html');

 // Read the HTML file
 fs.readFile(path.join(__dirname, 'dist/index.html'), (err, data) => {
  if (err) {
   // Handle error if the file cannot be read
   res.statusCode = 500;
   res.end('Internal Server Error');
  } else {
   // Send the HTML content to the client
   res.statusCode = 200;
   res.end(data);
  }
 });
});

// Start the server on port 3000
server.listen(3000, () => {
 console.log('Server is running on http://localhost:3000');
});
