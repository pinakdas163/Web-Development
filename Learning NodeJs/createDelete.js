var fs=require('fs');

/*fs.mkdir('stuff', function() {
	fs.readFile('readAsync.txt', 'utf8', function(err, data){
  fs.writeFile('./stuff/writeAsync.txt',data);
  console.log(data);
});
});*/

fs.unlink('./stuff/writeAsync.txt', function() {
	fs.rmdir('stuff');
});