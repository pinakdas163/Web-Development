var express= require('express');

var app= express();

app.get('/', function(req, res) {
  res.sendFile(__dirname+'/page.html');
});

app.get('/contact', function(req, res) {
  res.send('This is a contact page');
});

app.get('/profile/:name', function(req, res) {
  res.send('This is a profile page of '+req.params.name);
});

app.listen(3000);
