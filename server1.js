const server =  http.createServer(function(req, res) {

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <body style="background: black; text-align: center; color: white;">
        <h1>Zuri Internship</h1>
        <br>
        <h3>Frontend Track</h3>
        <br>
        <h3>Backend Track</h3>
      </body>
    </html>
  `);  
});

server.listen(8080, '127.0.0.1');

console.log("Congratulations, you have created a javascript server!");