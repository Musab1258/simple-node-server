const http = require('http');

const server =  http.createServer(function(req, res) {

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end("This is the first time, I am creating a javascript server.");

});

server.listen(8080, '127.0.0.1');

console.log("Congratulations, you have created a javascript server!");
