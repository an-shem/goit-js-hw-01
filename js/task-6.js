//
// ------------------------------------------------------
// ВАРИАНТ-1 через do... while

let input = 0;
let total = 0;

do {
  input = prompt('Введите чило:');
  let i = Number(input);

  if (Number.isNaN(i)) {
    alert(`Было введено не число, попробуйте еще раз`);
    continue;
  }

  total += i;
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);

//
//
//------------------------------------------------------
// ВАРИАНТ-2 через бесконечный цикл

// let input = 0;
// let total = 0;

// while (true) {
//   input = prompt('Введите чило:');

//   if (input === null) {
//     alert(`Общая сумма чисел равна ${total}`);
//     break;
//   }
//   if (Number.isNaN(Number(input))) {
//     alert(`Было введено не число, попробуйте еще раз`);
//     continue;
//   }

//   total += Number(input);
// }

//
//
//-----------------------------------------------------------
// ВАРИАНТ-3 через for

// let input = 0;
// let total = 0;

// for (let i = 0; input !== null; total += i) {
//   input = prompt('Введите число:');

//   if (Number.isNaN(Number(input))) {
//     alert(`Было введено не число, попробуйте еще раз`);
//     i = 0;
//     continue;
//   }
//   i = Number(input);
// }
// alert(`Сумма введенных Вами чисел: ${total}`);
