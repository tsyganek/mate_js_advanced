'use strict'

const numbers = [1, 2, 3, 4, 5];

numbers.shift = function() {
    const el = this[0];
  
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
  
    if (this.length > 0) {
      this.length = this.length - 1;
    } else {
      this.length = 0;
    }
  
    return el;
  };
  
const removedElement = numbers.shift();
removedElement === 1
numbers === [2, 3, 4, 5]