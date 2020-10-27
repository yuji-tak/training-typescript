"use strict";
var Developer = /** @class */ (function () {
    function Developer(name, age) {
        this.name = name;
        this.age = age;
    }
    Developer.prototype.sayHi = function (msg2) {
        console.log(msg2);
    };
    return Developer;
}());
var test = new Developer('yuji', 32);
test.sayHi('hi');
