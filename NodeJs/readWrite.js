var fs=require('fs');

var readMe=fs.readFileSync('read.txt', 'utf8');


fs.readFile('readAsync.txt', 'utf8', function(err, data){
  fs.writeFile('writeAsync.txt',data);
  console.log(data);
});
console.log(readMe);

//fs.writeFileSync('write.txt','You wrote in this file');

/*fs.unlink('write.txt');*/