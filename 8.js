'use strict'

// Mate Robot Factory збираються скласти бюджет на наступний рік, для цього їм потрібно знати скільки будуть коштувати усі деталі, які вони планують придбати протягом року. Створи функцію calculateCost, яка приймає bucket, та products, де bucket - це об'єкт з запчастинами, які ми збираємося придбати, а products - об'єкт з цінами на деталі від магазинів. Товари в магазинах не повторюються.

function calculateCost(bucket, products) {
  let totalCost = 0;
  let productsQuantity = bucket;
  let productQuantityNames = Object.keys(productsQuantity);

  let itemsList = {};
  let productsList = Object.entries(products)

  for (let entry of productsList) {
    productsList = Object.assign(itemsList, entry[1]);
  }

  for (let item in productsList) {
    for (let i = 0; i < productQuantityNames.length; i++){
      if (item === productQuantityNames[i]){
        let cost = productsList[item] * productsQuantity[productQuantityNames[i]];
        totalCost = totalCost + cost;
      }
    }
  }

  console.log(totalCost);
  return totalCost;
}


    
  const bucket = {
    display: 20,
    wheel: 100,
    cpu: 40,
  }
  
  const products = {
    amazobot: {
      wheel: 12.5,
    },
    robozetka: {
      display: 56.2,
      cpu: 150,
    },
  }
  
  calculateCost(bucket, products) === 8374
