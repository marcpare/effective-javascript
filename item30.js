
function User(name, password) {
  this.name = name;
  this.password = password;
}

User.prototype.toString = function () {
  return "[User " + this.name + "]";
}

var u = new User("sfalken", "1234");

console.log(u.toString());
console.log(Object.getPrototypeOf(u) === User.prototype)
console.log(u.__proto__ === User.prototype)
