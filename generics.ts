function copy<T extends { age: number }>(value: T): T {
  return value;
}
console.log(copy({ age: 32 }));
