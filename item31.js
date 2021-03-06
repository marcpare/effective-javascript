var empty = Object.create(null);
console.log("__proto__" in empty);

if (typeof Object.getPrototypeOf === "undefined") {
  Object.getPrototypeOf = function (obj) {
    var t = typeof obj;
    if (!obj || (t !== "object" && t !== "function")){
      throw new TypeError('not an object');
    }
    return obj.__proto__;
  }
}