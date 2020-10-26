"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// abstract classはインスタンス化できない
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    // static method
    Person1.isAdult = function (age) {
        if (age >= 20)
            return true;
        return false;
    };
    Person1.prototype.increment = function () {
        return this.age += 1;
    };
    Person1.prototype.sayHi = function () {
        console.log("hello " + this.name + ". im " + this.age + " years old");
        this.explainJob();
    };
    // static property
    Person1.species = 'Homo sapiens';
    return Person1;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, _subject) {
        var _this = _super.call(this, name, age) || this;
        _this._subject = _subject;
        return _this;
    }
    Teacher.prototype.explainJob = function () {
        console.log("i teach " + this.subject);
    };
    Object.defineProperty(Teacher.prototype, "subject", {
        // get accessor
        get: function () {
            if (!this._subject) {
                throw new Error('There is no subject.');
            }
            return 'fromGet Music';
        },
        // setでは処理が呼び出されたタイミングで下記の処理を実行
        set: function (value) {
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    Teacher.getInstance = function () {
        // Teacherインスタンスに値があれば、そのままのインスタンスを返す
        if (Teacher.instance)
            return Teacher.instance;
        // Teacherのインスタンス化は下記の処理の一度きりという明示的な書き方ができる
        Teacher.instance = new Teacher('yuji', 32, 'Math');
        return Teacher.instance;
    };
    return Teacher;
}(Person1));
var teacher = Teacher.getInstance();
var teacher2 = Teacher.getInstance();
console.log(teacher === teacher2);
// シングルトンパターン：classから一つしかインスタンスを作らない
