const http = require('http');
let fs = require('fs');
let url = require('url');
let file = 'img/phoenix5a.jpg';

http
  .createServer(function (request, response) {
    let name = url.parse(request.url, true).query.name;

    if (name === undefined) name = 'world';

    if (name == 'burningbird') {
      fs.stat(file, function (err, stat) {
        if (err) {
          console.log(err);
          response.writeHead(200, { 'Content-Type': 'text/plain' });
          response.end("Sorry, Burningbird isn't around right now \n");
        } else {
          let img = fs.readFileSync(file);
          response.contentType = 'image/jpg';
          response.contentLength = stat.size;
          response.end(img, 'binary');
        }
      });
    } else {
      response.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      response.end('Hello ' + name + '\n');
    }
  })
  .listen(8124);

console.log('server running at 8124');
