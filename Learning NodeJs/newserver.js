var express= require('express');

var app= express();
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  res.sendFile(__dirname+'/page.html');
});

app.get('/contact', function(req, res) {
  res.send('This is a contact page');
});

app.get('/profile/:name', function(req, res) {
  var data={age:26, hobbies:['movies', 'exercise', 'learning']};
  res.render('profile', {person:req.params.name, data:data});
});

app.listen(3000);
