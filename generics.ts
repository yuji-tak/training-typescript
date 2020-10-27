function copy<T>(value: T): T {
  return value;
}
console.log(copy<string>('hello'));
console.log(copy({ name: 'yuji' }));
