"use strict"

//a=10;
//let c =30;

//var b= 10;
/*var i =50;

for(let i=1; i<10; i++){
	//console.log(i);	
	//console.log(b);
}*/

//console.log(i);

//var a = new Array('abc', 'xyz', 'pqr');
//let b = ['abc', 'xyz', 'pqr'];

//console.log(b[0]);	

/*let student = [
				['alamin', 'CS', '2.5'],
				['XYZ', 'CS', '2.9'],
				['PQR', 'CS', '2.7'],
				];*/

//console.log(student[1][2]);


/*if(){

}else{

}
*/

/*function add(a){
	return a();
}*/

/*let a = function(){
	return 10;
}*/

/*let a = ()=> {
	return 10;
}*/

//console.log(add(a));


/*var student = new Object();
student.age = '10';
student.name = 'alamin';
student.dept = 'CS';
console.log(student.dept);*/


/*var student = {
	name: 'alamin',
	age: 'xyz',
	dep: 'CS'
};

var s1 = {
	name: 'XYZ',
	age: '34',
	dep: 'CS'
};*/
//console.log(s1.name);


/*var student = function(name="", dept=""){
	return {
		name: name,
		dept: dept,
		age: '23',
		getname: function(){
			return this.name;
		}
	};
}

var s1 = student('alamin', 'CSE');
var s2 = student('xyz');

console.log(s2.dept);*/

var student = function (name="", age="", dept=""){
	this.age  = age;
	this.name = name;
	this.dept = dept;
	this.getobj = function (){
		return {
			date: '12-12-1122',
			version: '3.4'
		};
	}
}

var s1 = new student('alamin');	
var s2 = new student('abc', '34');	
var s3 = new student('xyz', '12','SE');

//console.log(s3.name);
console.log(s3['getobj']()['date']);
