const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const server = http.createServer((req, res) => {

  const url = req.url;
  const name = 'Viktor';
  const courses = [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JS' }, { name: 'Node' }]

  res.setHeader('Content-Type', 'text/html');
  if(url === '/') {
    ejs
      .renderFile('./template/index.ejs', { name })
      .then(data => res.end(data));
      //응답을 여러번 보낼때는 res.send() //한번 보내고 끝내려면 res.end()
  }
  else if(url === '/courses') {
    ejs
      .renderFile('./template/courses.ejs', { courses })
      .then(data => res.end(data));
  }
  else {
    ejs
      .renderFile('./template/not-found.ejs', { name })
      .then(data => res.end(data));
  }

})

server.listen(8080);