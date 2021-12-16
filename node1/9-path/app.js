const { basename } = require('path');
const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
//경로구분자: /
console.log(path.delimiter);
//환경변수구분자: :

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

// dirname
console.log(path.dirname(__filename));

// extension
console.log(path.extname(__filename));

// parse
const parsed = path.parse(__filename);
console.log(parsed);