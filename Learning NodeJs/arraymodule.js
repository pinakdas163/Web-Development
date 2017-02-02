var module=require('./module1.js');
var events =require('events');

var arr=module.count(['pinak','binit']);

var farr=module.adder(5,3);

console.log(arr[0]);

console.log(farr);