class Person1 {
  // フィールド
  name: string;
  private age: number;

  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }

  increment() {
    this.age += 1;
  }
  sayHi(this: Person1) {
    console.log(`hello ${ this.name }`);
  }
}
const test = new Person1('yuji', 32);
console.log(test);
test.sayHi();
