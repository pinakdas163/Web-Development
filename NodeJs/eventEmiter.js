var events= require('events');
var util=require('util');

//util.inherits(myEmitter, events.EventEmitter);
myEmitter=new events.EventEmitter();
myEmitter.on('hello', function(msg) {
	console.log(msg);
});

myEmitter.emit('hello', 'golu marka');

var Person=function(name) {
	this.name=name;
};

util.inherits(Person, events.EventEmitter);
var boltu=new Person('boltu');
var pinak=new Person('pinak');

var brothers=[boltu, pinak];
brothers.forEach(function(person) {
	person.on('speak', function(msg) {
		console.log(person.name+' says '+msg);
	});
});

boltu.emit('speak', 'Jishnu re');
