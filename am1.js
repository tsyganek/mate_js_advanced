'use strict'

// Реалізуй метод push, який повторює функціонал оригінального метода. Всередині методу використовуй this для доступу до поточного масиву.

// Користуватися методами масивів у цьому завданні заборонено. Використовуй цикли, доступ по індексу та довжину масиву за потреби.

// const numbers = [];
// const newLength = numbers.push(10);
// newLength === 1
// numbers === [10]






let numbers = [1,2,3];

numbers.push = function(...args){
  let newNumbers = numbers;
  let length = numbers.length;
  let argsArray = [...args];

  for (let i = 0; i < argsArray.length; i++ ){
    newNumbers[length+i] = argsArray[i];
  }
  console.log(newNumbers);
  console.log(newNumbers.length);

  }

numbers.push(72);

// const newNumbers = [...numbers, ...args];
// const newLength = newNumbers.length;

// return newLength;