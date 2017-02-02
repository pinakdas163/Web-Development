var time=0;
var timer=setInterval(function() {
	time+=3;
	console.log('hey ninja\'s');
	console.log(__dirname);
	if(time>9)
	{
		clearInterval(timer);
	}
},3000);