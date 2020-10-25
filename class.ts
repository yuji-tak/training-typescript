class Person1 {
  constructor(readonly name: string, protected age: number) {
  }

  increment() {
    return this.age += 1;
  }
  sayHi(this: Person1) {
    console.log(`hello ${ this.name }. im ${ this.age } years old`);
  }
}

class Teacher extends Person1 {
  constructor(name: string, age: number, private subject: string) {
    super(name, age)
  }
  sayHi() {
    console.log(`hello ${ this.name }. im ${ this.age } years old`);
  }
}

const teacher = new Teacher('yuji', 32, 'Math');
teacher.sayHi();
