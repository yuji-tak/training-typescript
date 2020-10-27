// オブジェクトのみに使用できるtypeエイリアス
interface Human {
  name: string;
  age: number;
  sayHi(msg: string): void;
}

class Developer implements Human {
  constructor(public name: string, public age: number) {}
  sayHi(msg2: string) {
    console.log(msg2);
  }
}

const test = new Developer('yuji', 32);
test.sayHi('hi');
