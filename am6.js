'use strict'

const numbers = [1, 2, 3, 4, 5];

numbers.pop = function() {
    const element = this[this.length - 1];
  
    if (this.length > 0) {
      this.length = this.length - 1;
    } else {
      this.length = 0;
    }
  
    return element;
  };
  


const removedElement = numbers.pop();
removedElement === 5;
numbers === [1, 2, 3, 4];