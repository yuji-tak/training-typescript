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
  // get accessor
  get subject() {
    if (!this._subject) {
      throw new Error('There is no subject.');
    }
    return 'fromGet Music'
  }
  // setでは処理が呼び出されたタイミングで下記の処理を実行
  set subject(value) {
    this._subject = value;
  }
  constructor(name: string, age: number, private _subject: string) {
    super(name, age)
  }
  sayHi() {
    console.log(`hello ${ this.name }. im ${ this.age } years old. i teach ${ this._subject }`);
  }
}

const teacher = new Teacher('yuji', 32, 'Math');

teacher.subject = 'sample';
console.log(teacher.subject);
teacher.sayHi();
