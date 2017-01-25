var count= function(arr) {
	return arr;
};

var adder= function(a,b) {
	return `The sum of 2 numbers is ${a+b}`;
};

var pi=3.14;

/*module.exports.count=count;
module.exports.adder=adder;
module.exports.pi=pi;*/

module.exports= {
	count:count,
	adder:adder,
	pi:pi
};