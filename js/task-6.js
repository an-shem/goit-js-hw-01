let input;
let total = 0;

while (true) {
  input = prompt('Введите чило:');

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }

  total += Number(input);
}
