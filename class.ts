class Person1 {
  // フィールド
  name: string;

  constructor(initName: string) {
    this.name = initName;
  }

  // TSとES6の書き方は同じ
  // 第一引数でthisの型定義のを行う、第二引数以降では通常通り引数をとることができる
  // sayHi(this: { name: string }) {
  // ↓更にTSにおいて、classで定義したインスタンスが表す型をもつ
  sayHi(this: Person1) {
    console.log(`hello ${ this.name }`);
  }

  // アロー関数では呼び出し時ではなく、定義時にthisを定義できるので下記のように書き換えができるが、この場合はこのclassで指定したnameプロパティを変更することができない
  // sayHi = () => {
  //   console.log(`hello ${ this.name }`);
  // }
}
const test = new Person1('yuji');
console.log(test);
test.sayHi();

const anotherTest = {
  name: 'anotherTest',
  sayHi: test.sayHi
}
anotherTest.sayHi();
