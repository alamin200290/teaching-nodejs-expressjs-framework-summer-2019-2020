var student = require('./student');

var s1 = student();
var s2 = student();
var s3 = student();

console.log(s1.getObj().version);
console.log(s1.dept);
