var bodyParser=require('body-parser');
var data=[{item:"problem solving"},{item:"web development"},{item:"college assignment"}];
var urlbodyencodedparser=bodyParser.urlencoded({extended:false});
module.exports=function(app) {

app.get('/list', function(req,res) {
 res.render('main',{todos:data});
});
//comments
app.post('/list',urlbodyencodedparser, function(req,res) {
  data.push(req.body);
  res.json(data);
});

app.delete('/list/:item', function(req,res) {
  data=data.filter(function(todo) {
    return todo.item.replace(/ /g, '-')!==req.params.item;
  });
  res.json(data);
});

};
