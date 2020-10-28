"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// デコレータファクトリを使用して、引数を渡す
function Logging(message) {
    return function (constructor) {
        console.log(message);
        console.log(constructor);
    };
}
function Component(template, selector) {
    // インスタンス化できるコンストラクタ関数であることを伝える型注釈
    return function (constructor) {
        var mountedElement = document.querySelector(selector);
        var instance = new constructor();
        if (mountedElement) {
            mountedElement.innerHTML = template;
            // !はnullを除外
            mountedElement.querySelector('h1').textContent = instance.name;
        }
    };
}
var User = /** @class */ (function () {
    // インスタンス化するとこのconstructor()が実行されてconsole.logが実行される
    function User() {
        this.name = 'yuji';
        console.log('User was created!');
    }
    User = __decorate([
        Component('<h1>{{ name }}</h1>', '#app')
        // デコレータはclassの定義時に実行されている
        ,
        Logging('Logging...')
    ], User);
    return User;
}());
var test2 = new User();
console.log(test2.name);
