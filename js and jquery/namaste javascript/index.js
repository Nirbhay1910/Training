/// hoisting 

getName(); //outputs Nirbhay Jain
console.log(x); // undefined
// console.log(y);//error
console.log(getName);//whole function

var x=7;

function getName() {
  console.log("Nirbhay Jain");
}

console.log(x); // 7

console.log(getName2); // undefined as arrow functions behaves as variables

var getName2 = () => { 
  console.log('Hello');
} 

var getName3 = function () {
  console.log('Yayy');
} // It again behaves as a variable