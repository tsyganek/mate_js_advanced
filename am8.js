'use strict'

const numbers = [1, 2, 3, 4, 5];

numbers.shift = function() {
 const el = this[0];

 for (let i = 1; i < this.length; i++) {
    this[i] = this [i-1];
 }
 return el;
};


const removedElement = numbers.shift();
removedElement === 1
numbers === [2, 3, 4, 5]