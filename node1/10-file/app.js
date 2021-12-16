const fs = require('fs');

// 3 
// rename(...., callback(err, data))
// try { renameSync(...) } catch(e) {}
// promises.rename().then().catch()

try {
  fs.renameSync('./text.txt', './text-new.txt');  
}
catch (err) {
  console.error(err);
}

fs.rename('./text-new.txt', './text.txt', (err) => {
  console.log(err);
})

console.log('hello');

fs.promises.rename('./text2.txt', './text2-new.txt')
.then(()=>{console.log('Done')})
.catch((err)=>{ console.error(err)})