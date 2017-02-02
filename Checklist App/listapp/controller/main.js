var bodyParser=require('body-parser');
var mongoose=require('mongoose');

mongoose.connect('mongodb://pinak:manali@ds139939.mlab.com:39939/listapp');

var lists= new mongoose.Schema(
  {
      item: String
  }
);

var mode=mongoose.model('mode',lists);

// var data1= mode({item:"Buy flowers"}).save(function(err){
//     if(err) throw err;
//     console.log('data saved');
// });

//var data=[{item:"problem solving"},{item:"web development"},{item:"college assignment"}];
var urlbodyencodedparser=bodyParser.urlencoded({extended:false});
module.exports=function(app) {

app.get('/list', function(req,res) {
  mode.find({}, function(err, data) {
    if(err) throw err;
     res.render('main',{todos:data});
   });

});
//comments
app.post('/list',urlbodyencodedparser, function(req,res) {
  mode(req.body).save(function(err,data) {
    if(err) throw err;
    res.json(data);
  });
});

app.delete('/list/:item', function(req,res) {

  mode.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data) {
    if (err) throw err;
    res.json(data);
  });
});

}
