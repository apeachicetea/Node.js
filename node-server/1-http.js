const http = require('http');
// const https = require('http2'); // https
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('incoming...');
  console.log(req.header);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  const url = req.url;
  if(url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('Welcome!');
  }
  else if(url === '/courses') {
    res.write('Courses');
  }
  else {
    res.write('Not Found');
  }
  res.end();
})

server.listen(8080);