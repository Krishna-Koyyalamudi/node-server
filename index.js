const http = require('http');

const hostname = process.env.hostname || '0.0.0.0';
const port = process.env.PORT || 4444;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Krishna Sumanth Koyyalamudi');
});

server.listen(port, hostname, () => {
  console.log(`Server running on ${port}/`);
});