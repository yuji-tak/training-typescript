class Person1 {
  // static property
  static species = 'Homo sapiens';
  // static method
  static isAdult(age: number) {
    if (age >= 20) return true;
    return false;
  }

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

console.log(Person1.species);
console.log(Person1.isAdult(18));
console.log(Person1.isAdult(20));
