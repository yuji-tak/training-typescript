type NumberBoolean = number | boolean;
type StringBoolean = string | number;
type Mix = NumberBoolean & StringBoolean;
type Mix2 = NumberBoolean | StringBoolean;

const input = document.getElementById('input') as HTMLInputElement;
input.value = 'init'
console.log(input.value);

interface Designer {
  name: string;
  [index: string]: string;
}
const designer: Designer = {
  name: 'yuji',
  role: 'any'
}
