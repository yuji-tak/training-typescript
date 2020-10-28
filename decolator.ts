// デコレータファクトリを使用して、引数を渡す
function Logging(message: string) {
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  }
}

function Component(template: string, selector: string) {
  // インスタンス化できるコンストラクタ関数であることを伝える型注釈
  return function (constructor: { new(...args: any[]): { name: string } }) {
    const mountedElement = document.querySelector(selector);
    const instance = new constructor();
    if (mountedElement) {
      mountedElement.innerHTML = template;
      // !はnullを除外
      mountedElement.querySelector('h1')!.textContent = instance.name;
    }
  }
}

@Component('<h1>{{ name }}</h1>', '#app')
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
