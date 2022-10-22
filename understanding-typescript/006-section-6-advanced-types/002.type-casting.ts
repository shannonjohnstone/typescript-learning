const input1 = <HTMLInputElement>document.getElementById('user-input1');
const input2 = document.getElementById('user-input2') as HTMLInputElement;
const input3 = document.getElementById('user-input3');

input1.value = 'Hi there, I am the first input!';
input2.value = 'Hi there, I am the second input!';

if (input3) {
  (input3 as HTMLInputElement).value = 'Hi there, I am the third input!';
}

export { };
