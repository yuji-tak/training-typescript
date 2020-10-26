// オブジェクトのみに使用できるtypeエイリアス
interface Human {
  name: string;
  age: number;
  sayHi(msg: string): void;
}

const human: Human = {
  name: 'yuji',
  age: 32,
  sayHi(msg: string) {
    console.log(msg);
  }
}
console.log(human.sayHi('hi'));

let developer: Human;
