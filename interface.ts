// オブジェクトのみに使用できるtypeエイリアス
interface Human {
  name: string;
  age: number;
  sayHi(msg: string): void;
}

class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number) {}
  sayHi(msg2: string) {
    console.log(msg2);
  }
}

const tmpDeveloper = {
  name: 'yuji',
  age: 32,
  experience: 3,
  sayHi(msg: string): void {
    console.log(msg);
  }
}

const test: Human = tmpDeveloper;
test.sayHi('here');
