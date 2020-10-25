class Person1 {
  constructor(public readonly name: string, public age: number) {
  }

  increment() {
    return this.age += 1;
  }
  sayHi(this: Person1) {
    console.log(`hello ${ this.name }`);
  }
}
const test = new Person1('yuji', 32);
test.sayHi();
