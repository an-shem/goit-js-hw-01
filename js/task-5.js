let countryForDelivery = prompt('Укажите страну доставки:');
if (countryForDelivery !== null) {
  countryForDelivery = countryForDelivery.toLowerCase();

  switch (countryForDelivery) {
    case 'китай':
      alert(`Доставка в Китай будет стоить 100 кредитов`);
      break;
    case 'чили':
      alert(`Доставка в Чили будет стоить 250 кредитов`);
      break;
    case 'австралия':
      alert(`Доставка в Австралию будет стоить 170 кредитов`);
      break;
    case 'индия':
      alert(`Доставка в Индию будет стоить 80 кредитов`);
      break;
    case 'ямайка':
      alert(`Доставка в Ямайку будет стоить 120 кредитов`);
      break;
    default:
      alert('В вашей стране доставка не доступна');
  }
} else {
  alert(`Отменено пользователем`);
}

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов
