var http=require('http');
var fs=require('fs');

/*var myReadStream= fs.createReadStream(__dirname + '/readMe.txt');
var myWriteStream= fs.createWriteStream(__dirname + '/writeMe.txt');
myReadStream.on('data', function(chunk) {
  console.log('data chunk received: ');
  myWriteStream.write(chunk);
});*/

//myReadStream.pipe(myWriteStream);

var server= http.createServer(function(req, res) {
  console.log('request came from this url: '+ req.url);
  if(req.url==='/index') {
    res.writeHead(200, {'Content-Type':'text/html'});
    var myReadStream= fs.createReadStream(__dirname + '/page.html');
    myReadStream.pipe(res);
  }
  else if(req.url==='/json') {
  res.writeHead(200, {'Content-Type':'application/json'});
  //var myReadStream= fs.createReadStream(__dirname + '/page.html');
  //myReadStream.pipe(res);
  var obj= [{
    name:"pinak",
    age:"26",
    city:"chico"
  }];
  res.end(JSON.stringify(obj));
}
else {
  res.writeHead(404, {'Content-Type': 'text/html'});
  var myReadStream= fs.createReadStream(__dirname + '/notfound.html');
  myReadStream.pipe(res);
}
});

server.listen(3000, '127.0.0.1');
console.log('listening from port '+3000);
