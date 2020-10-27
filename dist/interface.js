"use strict";
var Developer = /** @class */ (function () {
    // ここではinterfaceで指定したreadonlyは無視できる
    function Developer(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    Developer.prototype.sayHi = function (msg2) {
        console.log(msg2);
    };
    return Developer;
}());
var tmpDeveloper = {
    name: 'yuji',
    age: 32,
    experience: 3,
    sayHi: function (msg) {
        console.log(msg);
    }
};
var test = tmpDeveloper;
test.sayHi('here');
