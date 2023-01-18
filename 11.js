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
   let availableCapacity = customer.vehicle.maxTankCapacity - customer.vehicle.fuelRemains;
   let moneyLimit = customer.money / fuelPrice;
   let fuelQuantity;
   let moneyPaid;

   if (amount < 2 || moneyLimit < 2 || availableCapacity < 2) {
    fuelQuantity = 0; 
    moneyPaid = 0;
   } else if (amount === undefined){
    if (availableCapacity <= moneyLimit){
      amount = availableCapacity;
      moneyPaid = availableCapacity * fuelPrice;
    customer.money = customer.money - moneyPaid;
    } else {
      fuelQuantity = moneyLimit;
      moneyPaid = moneyLimit * fuelPrice;
      customer.money = customer.money - moneyPaid;
    }
   }
   else if (amount <= availableCapacity && moneyLimit >= amount){
    fuelQuantity = amount;
    moneyPaid = amount * fuelPrice;
    customer.money = customer.money - moneyPaid;
   } 
   else if (amount <= availableCapacity && moneyLimit < amount && availableCapacity >= moneyLimit) {
    fuelQuantity = moneyLimit;
    moneyPaid = moneyLimit * fuelPrice;
    customer.money = customer.money - moneyPaid;
   } 
   else if (amount <= availableCapacity && moneyLimit < amount && availableCapacity < moneyLimit) {
    fuelQuantity = availableCapacity;
    moneyPaid = availableCapacity * fuelPrice;
    customer.money = customer.money - moneyPaid;
   } 
   else if (amount > availableCapacity) {
    if (availableCapacity <= moneyLimit){
      fuelQuantity = availableCapacity;
      moneyPaid = availableCapacity * fuelPrice;
      customer.money = customer.money - moneyPaid;
    } else if (availableCapacity > moneyLimit) {
      fuelQuantity = moneyLimit;
      moneyPaid = moneyLimit * fuelPrice;
      customer.money = customer.money - moneyPaid;
    }} 

    console.log (fuelQuantity);
    console.log (moneyPaid);
    console.log (customer.money);

    }






const customer = {
      money: 3000, // залишок грошей на рахунку клієнта 
      vehicle: {
        maxTankCapacity: 40, // Об'єм бака
        fuelRemains: 8, // Залишок палива у баку
      }}

fillTank(customer, 15, 31)
fillTank(customer, 15, 1)
fillTank(customer, 15, 45)
fillTank(customer, 15)
fillTank(customer, 15, 22)

