const http = require('http');

http
  .createServer(function (_request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World!!');
  })
  .listen(8124);

console.log(`Server running at http://localhost:8124/`);
