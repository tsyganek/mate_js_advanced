'use strict'

// Реалізуй метод lastIndexOf, який повторює функціонал оригінального методу. Всередині методу використовуй this для доступу до поточного масиву. Користуватися методами масивів у цьому завданні заборонено. Використовуй цикли, доступ по індексу та довжину масиву за потреби.

const numbers = [5, 6, 1, 4, 2, 5];

numbers.lastIndexOf = function(value, index) {
    let start;

    if (index === undefined) {
        start = this.length - 1;
    }

    if (index < 0 && index > -this.length) {
        start = this.length + index;
    }

    if (index < 0 && index < -this.length) {
        return -1;
    }

    if (index > 0 && index < this.length) {
        start = index;
    }

    if (index > 0 && index >= this.length) {
        start = this.length - 1;
    }

    for (let i = start; i >=0; i--) {
        if (this[i] === value) {
            return i;
        }
    }

    return -1;
  };  

numbers.lastIndexOf(5) === 5
numbers.lastIndexOf(7) === -1
numbers.lastIndexOf(1, 3) === 2
numbers.lastIndexOf(5, -2) === 0
numbers.lastIndexOf(5, -7) === -1