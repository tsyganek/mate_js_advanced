'use strict'

const numbers = [5, 6, 1, 4, 2, 5];
numbers.reverse = function() {
 arr = [];

 for (let i = 0; i <= this.length - 1; i++) {
    arr[i] = this.length - 1 - i;
 }

 return arr;
  };
numbers.reverse()
// numbers === [5, 2, 4, 1, 6, 5]