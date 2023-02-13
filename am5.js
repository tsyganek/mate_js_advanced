'use strict'

const numbers = [5, 6, 1, 4, 2, 5];

numbers.reverse = function() {
   let n = this.length - 1;

   for (let i = 0; i<= n/2; i++) {
     let temp = this[i];
     this[i] = this[n-i];
     this[n-i] = temp;
  };

  console.log(this)
  return this;
}

numbers.reverse()
// numbers === [5, 2, 4, 1, 6, 5]