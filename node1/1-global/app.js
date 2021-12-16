const fs = require("fs");
console.log(global);

global.hello = () => {
  global.console.log("hello");
}

global.hello();
hello();
//global은 생략가능

