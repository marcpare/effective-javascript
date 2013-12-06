"use strict";
function test () {
  foo = 10; // throws an error, nice!
}
// test();
// console.log(foo);

function User(name) {
  this.name = name; // throws an error in strict mode
}
//var u = User('M');

function UserRobust(name) {
  if (!(this instanceof User)) {
    return new User(name);
  }
  this.name = name;
}
var u = UserRobust('foo');
console.log(u.name + " created");

