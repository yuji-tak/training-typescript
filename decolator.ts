function Logging(message: string) {
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  }
}

// デコレータはclassの定義時に実行されている
@Logging('Logging...')
class User {
  name = 'yuji';
  // インスタンス化するとこのconstructor()が実行されてconsole.logが実行される
  constructor() {
    console.log('User was created!');
  }
}

const test2 = new User();
console.log(test2.name);
