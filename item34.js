/*
function User(name) {
  this.name = name;
  this.toString = function () {
    return "[User ]" + this.name + "]";
  };
}
*/

function User(name) {
  this.name = name;
}
User.prototype.toString = function () {
  return "[User ]" + this.name + "]";
}

var u1 = new User('foo');
var u2 = new User('bar');
var u3 = new User('baz');

// use node inspector to observe:
// node --debug-brk item34.js
// node-inspector
