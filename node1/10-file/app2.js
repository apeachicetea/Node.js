const fs = require('fs').promises;

// read a file
fs.readFile('./text.txt', 'utf8')
.then(data => console.log(data))
.catch(err => console.error(err))

// writing a file
fs.writeFile('./file.txt', 'Hello, Dream Coders! :)')
.catch(err => console.error(err))

fs.appendFile('./file.txt', 'Hello, Yo Dream Coders! :)')
  .then(() => {
    // copy
    fs.copyFile('./file.txt', './file2.txt')
  })
  .catch(err => console.error(err))

// folder
fs.mkdir('sub-folder')
  .catch(err => console.error(err))

fs. readdir('./')
  .then(data => console.log(data))
  .catch(err => console.error(err));
