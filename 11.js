'use strict'

// Mate Royal Oil вирішили повністю автоматизувати процес заправки.

// Напиши функцію fillTank, яка приймає об'єкт customer, ціну 1 літра палива fuelPrice та amount - скільки літрів хоче купити клієнт.

// Об'єкт customer містить наступні властивості:

// customer = {
//   money: 3000, // залишок грошей на рахунку клієнта 
//   vehicle: {
//     maxTankCapacity: 40, // Об'єм бака
//     fuelRemains: 8, // Залишок палива у баку
//   }
// }

// Функція нічого не повертає, а лише доливає паливо та знімає кошти за наступними правилами:

// Якщо amount не передано, значить замовлено повний бак.
// Якщо amount більше ніж вміщає бак, залий тільки те, що поміститься.
// Завжди заливаємо тільки те, за що клієнт може заплатити.
// Округлюй обсяг палива що буде залито вниз до десятих.
// Якщо вийшло < 2 літрів, взагалі не заправляй клієнта
// Вартість заправленого пального округли до сотих (до найближчого значення).'

function fillTank(customer, fuelPrice, amount) {
  const roundedAmount = Math.floor(amount * 10) / 10;
  const availableCapacity
  = customer.vehicle.maxTankCapacity - customer.vehicle.fuelRemains;
  const moneyLimit = customer.money / fuelPrice;
  let fuelQuantity;
  let moneyPaid;

  if (roundedAmount < 2 || moneyLimit < 2 || availableCapacity < 2) {
    fuelQuantity = 0;
    moneyPaid = 0;
  } else if (amount === undefined) {
    if (availableCapacity <= moneyLimit) {
      fuelQuantity = availableCapacity;
      moneyPaid = availableCapacity * fuelPrice;
    } else {
      fuelQuantity = moneyLimit;
      moneyPaid = moneyLimit * fuelPrice;
    }
  } else if (roundedAmount <= availableCapacity
  && moneyLimit >= roundedAmount) {
    fuelQuantity = roundedAmount;
    moneyPaid = roundedAmount * fuelPrice;
  } else if (roundedAmount <= availableCapacity
  && moneyLimit < roundedAmount && availableCapacity >= moneyLimit) {
    fuelQuantity = moneyLimit;
    moneyPaid = moneyLimit * fuelPrice;
  } else if (roundedAmount <= availableCapacity
  && moneyLimit < roundedAmount && availableCapacity < moneyLimit) {
    fuelQuantity = availableCapacity;
    moneyPaid = availableCapacity * fuelPrice;
  } else if (roundedAmount > availableCapacity) {
    if (availableCapacity <= moneyLimit) {
      fuelQuantity = availableCapacity;
      moneyPaid = availableCapacity * fuelPrice;
    } else if (availableCapacity > moneyLimit) {
      fuelQuantity = moneyLimit;
      moneyPaid = moneyLimit * fuelPrice;
    }
  };
  fuelQuantity = Math.floor(fuelQuantity * 10) / 10;
  moneyPaid = Math.round(moneyPaid * 100) / 100;
  customer.vehicle.fuelRemains = customer.vehicle.fuelRemains + fuelQuantity;
  customer.money = customer.money - moneyPaid;
}

// const customer = {
//       money: 3000, // залишок грошей на рахунку клієнта 
//       vehicle: {
//         maxTankCapacity: 40, // Об'єм бака
//         fuelRemains: 8, // Залишок палива у баку
//       }}

// // fillTank(customer, 15, 31)
// // fillTank(customer, 15, 1)
// // fillTank(customer, 15, 45)
// fillTank(customer, 15)
// // fillTank(customer, 15, 22)

const customer = {
  money: 1000,
  vehicle: {
    maxTankCapacity: 65,
    fuelRemains: 2,
  },
};

fillTank(customer, 10);


