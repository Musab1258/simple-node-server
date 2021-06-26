const http = require('http');

const server =  http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(`
      {
          "name": "Musab Habeeb",
          "country": "Nigeria",
          "hobby": "I love reading"
      }
    `);
  
});
  
server.listen(8080, '127.0.0.1');
  
console.log("Congratulations, you have created a javascript server!");