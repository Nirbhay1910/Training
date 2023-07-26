///////// hoisting /////////

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



/////// FUNCTIONS //////


var x=1;
a();
b();
console.log(x);

function a(){
  var x=10;
  console.log(x);
}
function b(){
  var x=20;
  console.log(x);
}



//////// window and this keyword ///////

console.log(window);
console.log(this); //at global level this points to window
// window.alert("yo");
console.log(window.x);
console.log(this.x);


////// undefined and vars ////////

console.log(nj);
if(nj===undefined){
  console.log("nj is undefined");
} else console.log("nj is defined");
var nj=70;
console.log(nj);
nj = "NIrbhayJain";
console.log(nj);


////// Scope and Lexical Environment //////

function scoping(){
  var girl = 5;
  scoping2();
  function scoping2(){
    console.log(hp);//hp doesnt exist in local so it go to the lexical env of its parent to find hp and goes on till it finds 'hp' or null;
  }//scoping2 is lexically inside scoping fn i.e it contains lexical env of its parent
}//scoping is lexically inside global i.e scoping has lexical env of global
//global's lexical env points to null
var hp = 10;
scoping();
// console.log(girl); //Error




//////// TDZ and let and const ///////

// console.log(p); //Reference error: cannot access before initialisation
let p=24; //let and const are also hoisted but they are not inside global object but in other memory space.
// That's why we can't access them till they are declared
console.log(p);
// let p =20; //syntax error : can't declare again
p=20; //It is fine
var x=1;
var x=2; // No error;
// Temporal Dead Zone or tdz is time till let or const variable is initialized with some value;

const q=9;
// q=10; //Type Error: assignment of const variable




//////// Block Scope and Shadowing //////

var qw=100;
let we = 500;//script scope
{
  //compound statement
  // is used when js expects one statement to provide multiple statements
  // example in loops, if block
  var qw = 10;
  let we=20; 
  const er=30;
  console.log(qw);//prints 10 line 110 shadows previous qw declaration and also modifies it as they points to same memory location
  console.log(we);//prints 20 as in block scope
  console.log(er);
  // we can only access let and const variables inside block only as they reside in separate memory block
  // var is hoisted in global space so it can be accessed from outside too.
}
console.log(we);//prints 500 as both let were in different locations
console.log(qw);//prints 10 not 100 as both vars above pointed to same location
// console.log(we);// Error
//  console.log(er);//Error

// let rt = 20;
// {
//   var rt = 30;
// } // illegal shadowing throws error

var rt = 20;
{
  let rt = 30;
}//allowed



/////////// Closures //////////////
function fn1(){
  var a = 7;
  function fn2(){
    console.log(a);
  }
  a=100;
  return fn2;
}
var z=fn1();
console.log(z);
z();//prints 100 as a location is updated
// function along with its scope is closure



///////////// setTimeout and closures ////////

function xo() {
  var i=1;
  for(var i=1;i<=5;i++){
    setTimeout(function (){
      console.log(i);
    },1000*i);//JS doesn't wait here, it just puts this function in callstack after the specified time
    // It prints 6 five times as i becomes 6 in milliseconds of time and function goes in callstack after 1s,2s,3s,4s,5s so everytime 6 is printed
  }
  console.log("Namaste");
}
// xo();/// prints Namaste first then after 3 sec prints i value

function xo2() {
  for(let i=1;i<=5;i++){
    setTimeout(function (){
      console.log(i);
    },1000*i);//JS doesn't wait here, it just puts this function in callstack after the specified time
    // Let has block scope. So for every iteration i points to whole new location => every setTimeout has different copy of i so it prints 1,2,3,4,5
  }
}
// xo2();

function xo3() {
  for(var i=1;i<=5;i++){
    function close(x){
      setTimeout(function (){
        console.log(x);
      },1000*x);
    }
    close(i); //it prints 1,2,3,4,5 as everytime i is passed into function it goes into new location of x
  }
}
// xo3();

function Counter(){
  let count = 0;
  this.increment = ()=>{
    count++;
    console.log(count);
  }
  this.decrement = ()=>{
    count--;
    console.log(count);
  }
}

let counter1 = new Counter();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();


/// first class functions means ability of functions to be used as values


///////// Callback functions ///////
setTimeout(function(){
  console.log("timer");
},5000);
function gh(tu){
  console.log("gh");
  tu();
}
gh(function tu(){
  console.log('tu');
})
//When one function is passed as an argument to another function and generally called at the end of the function
function attachEventListener(){
  let count = 0;
  document.getElementById("clickMe").addEventListener('click',function xyz(){
    console.log('button clicked', ++count);
 })
}
attachEventListener();
/// setTimeout, DOM API, fetch , local storage, console, location are all parts of web APIs which are part of browser not js
/// when setTimeout is called it puts callback fn (cb) in browser and wait till timer expires after that cb is pushed into call back queue,
/// A event loop is present whose work is to constantly monitor both call stack and callback queue if call stack is empty. It will schedule cb from callbak queue to call stack
/// when fetch is called it creates promise and its call back function goes into microtask queue which has more priority then callback queue.




///js uses just in time compilation
/// interpretter is fast, compiler is efficiecient
/// originally js is made for interpretter but now it uses interpretter and compiler both
/// code -> parsing (generates AST) -> interpretter (converts into byte code) it takes help of compiler to optimise the code in runtime -> execution (memory heap and callstack)
/// garbage collector is used to free space in memory heap wherever possible using mark and sweep algorithm
/// v8 is fastest js engine


/// there is trust issue in set timeout as only when call stack is empty event loop schedules callback fn to execute
/// but if there are millions of lines of code then it will take more time than timer to execute all functions in call stack. Hence there will be delay in cb execution.

// console.log("start");
// setTimeout(function cb(){
//   console.log("callback");
// }, 5000);
// setTimeout(function cb(){
//   console.log("callback 0");
// }, 0); // even timer is 0 even then it will go through callback queue hence will execute later
// console.log("end");

// //delay of 10s

// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate<startDate + 10000){
//   endDate = new Date().getTime();
// }
// console.log("while expires");



/////////// higher order functions /////////

/// use DRY principle (Don't Repeat Yourself)

const radius = [3,1,2,4];

const area = function (radius){
  return  Math.PI * radius*radius;
}
const circumference = function (radius){
  return  Math.PI * radius* 2;
}
const diameter = function (radius){
  return  2 * radius;
}

const calculate = function (radius, logic){
  const output = [];
  for(let i=0;i<radius.length;i++){
    output.push(logic(radius[i]));
  }
  return output;
}

console.log(calculate(radius,area));
console.log(radius.map(area));
const out = radius.map(area);
console.log(out);
console.log(radius.map((radii)=>{
  return radii*2;
}));

//// Array prototype ////
Array.prototype.calculate = function (logic){
  const output = [];
  for(let i=0;i<this.length;i++){
    output.push(logic(this[i]));
  }
  return output;
}/// Now calculate method will be available on every array
console.log(radius.calculate(area))

////////// objects and prototype /////////

let arr = ["Nirbhay", "Rohit"];
let object = {
  name: "Nirbhay",
  city: "Delhi",
  getIntro: function(){
    console.log(this.name+" from "+this.city);
  }
}
// Everything in js is object
//__proto__ or prototype contains methods which can be used
// Array.__proto__.__proto__ is same as Object.__proto__
// Object.__proto__.__proto__ is NULL




////////// shallow copy vs deep copy ///////

const originalObject = { a: 1, b: { c: 2 } };  
const shallowCopy = { ...originalObject };  
shallowCopy.a = 3; // Changes shallowCopy, but not originalObject  
shallowCopy.b.c = 4; // Changes both shallowCopy and originalObject as nested object still points to same location
console.log(originalObject);



const originalObject2 = { a: 1, b: { c: 2 } };  
const deepCopy = JSON.parse(JSON.stringify(originalObject2)); 
deepCopy.a = 3; // Changes deepCopy, but not originalObject  
deepCopy.b.c = 4; // Changes deepCopy, but not originalObject  
console.log(originalObject2);


/////// filter and reduce ///////
const arr2 = [5,1,3,2,6];
function isOdd(x){
  return x%2===1;
}
const op =  arr2.filter(isOdd);
console.log(op);


const sumOfArray = arr2.reduce(function(acc,curr){ //takes 2 args accumulator where result is accumulated, curr is current element
  acc=acc+curr;
  return acc;
})
console.log(sumOfArray);