'use strict'

const numbers = [1, 2, 3, 4, 5];

numbers.includes = function(value, fromIndex) {
    let start;
  
    if (fromIndex === undefined) {
      start = 0;
    };
  
    if (fromIndex >= 0 && fromIndex < this.length) {
      start = fromIndex;
    };
  
    if (fromIndex > 0 && fromIndex >= this.legth) {
      start = 0;
    };
  
    if (fromIndex < 0 && fromIndex > -this.length) {
      start = this.length + fromIndex;
    };
  
    if (fromIndex < 0 && fromIndex < -this.length) {
      start = 0;
    }
  
    for (let i = start; i < this.length; i++) {
      if (value === this[i]) {
        return true;
      }
    }
  
    return false;
  };
  
numbers.includes(71) === false
numbers.includes(4) === true
numbers.includes(1, 3) === false
numbers.includes(5, -2) === true

