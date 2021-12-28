const http = require('http');
const fs = require('fs');

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const server = http.createServer((req, res) => {
  console.log('incoming...');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  const url = req.url;

  res.setHeader('Content-Type', 'text/html');
  if(url === '/') {
    const read = fs.createReadStream('./html/index.html')
    //파일을 열어서
    read.pipe(res);
    //res로 read파일을 연결해주면 된다.
  }
  else if(url === '/courses') {
    fs.createReadStream('./html/courses.html').pipe(res);
  }
  else {
    fs.createReadStream('./html/not-found.html').pipe(res);
  }

})

server.listen(8080);