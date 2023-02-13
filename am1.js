'use strict'

// Реалізуй метод push, який повторює функціонал оригінального метода. Всередині методу використовуй this для доступу до поточного масиву.

// Користуватися методами масивів у цьому завданні заборонено. Використовуй цикли, доступ по індексу та довжину масиву за потреби.

// const numbers = [];
// const newLength = numbers.push(10);
// newLength === 1
// numbers === [10]






let numbers = [1,2,3];

numbers.push = function(...args){
  const arrArgs = args;

  for (let i = 0; i < arrArgs.length; i++) {
    this[this.length] = arrArgs[i];
  }

  return this.length;
  }

numbers.push(72, 15, 47);

