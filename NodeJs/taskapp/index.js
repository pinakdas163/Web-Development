var express=require('express');
var main=require("./controller/main")
var app=express();

app.set('view engine','ejs');

app.use(express.static('./public'));
main(app);
app.listen(3001);
//console.log('listening on 3000');
