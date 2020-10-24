//arrow functions(anonymous function)anonymous means no name
//function add(num1,num2){
// return num1+num2;
//}
//console.log(add(10,20));
sum = (num1, num2) => num1 + num2;
console.log("the sum is " + sum(10, 20))
diff = (num1, num2) => num1 - num2;
console.log("the difference is " + diff(10, 20))
mul = (num1, num2) => num1 * num2;
console.log("the product is " + mul(10, 20))
div = (num1, num2) => num1 / num2;
console.log("the quotient is " + div(10, 20))
cuberoot = (num1) => num1 ** 3
console.log("the cube root of given number is " + cuberoot(3))
//map,filter,reduce
//map
//filter
//reduce
// we have an arry 
var ar = [1, 2, 3, 4, 5]
// var square=[];
// for(item of ar){
//     square.push((item**2));
// }console.log(square)
// function square(num){
//     return num*num;
// }
// (num)=>num*num
var squares = ar.map((num) => num * num);
console.log(squares)
//even or not
var even = ar.filter(num => num % 2 == 0)
console.log(even)
var names = ["a", "b", "c", "d", "e","aa"]
//convert to uppercase
var uppcase = names.map(name => name.toUpperCase())
console.log(uppcase)
//fetch names starting with a
var search=names.filter(name=>name.charAt(0)=='a')
console.log(search)
//eg for reduce 
var arr=[1,2,3,4,5,6]
var tot=arr.reduce((num1,num2)=>num1+num2)
console.log(tot)
var high=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(high)