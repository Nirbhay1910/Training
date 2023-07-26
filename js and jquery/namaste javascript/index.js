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