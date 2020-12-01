const credits = 23580;
const pricePerDroid = 3000;

const numberPerDroid = prompt('Какое количество дроидов Вы хотите купить?');

if (numberPerDroid === null) {
  console.log('Отменено пользователем!');
} else {
  const totalPrice = numberPerDroid * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(
      `Вы купили ${numberPerDroid} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`,
    );
  }
}
