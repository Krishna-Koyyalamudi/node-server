const http = require('http');

const hostname = process.env.hostname || '0.0.0.0';
const port = process.env.PORT || 4444;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('<html>');
  res.write('<body><h2>Krishna Sumanth Koyyalamudi</h2></body>');
  res.end('</html>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});