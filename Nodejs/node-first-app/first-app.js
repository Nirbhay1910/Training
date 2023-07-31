const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello from node js");

const person = {
  firstname: "Nirbhay",
  age: 21,
  greet1: () => {
    console.log("Hello I'm " + this.firstname); //will give undefined as in arrow function this keyword represents global.
  },
  greet2: function () {
    console.log("Hello I'm " + this.firstname);
  },
  greet3() {
    console.log("Hello I'm " + this.firstname);
  }, //better
};
person.greet1();
person.greet2();
person.greet3();

const hobbies = ["reading", "skating"];
// console.log(hobbies.map((hobby) => "Hobby : " + hobby));
// for (let hobby of hobbies) {
//   console.log(hobby);
// }

/// spread operator ///
const copiedPerson = { ...person };
console.log(copiedPerson);
const copiedHobbies = [...hobbies];
console.log(copiedPerson);

/// rest operator ///
function toArray(...args) {
  return args;
}
console.log(toArray(1, 2, 3, 4));

/// destructuring
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
const { firstname: fname, age: age } = person;
console.log(fname, age);
const printName = ({ firstname }) => {
  console.log(firstname);
};
printName(person);
