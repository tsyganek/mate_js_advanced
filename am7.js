'use strict'

const numbers = [1, 2, 3];

numbers.unshift = function(...el) {
  const args = [...el];

  for (let i = this.length - 1; i >= args.length; i--){
    this[i + args.length] = this[i];
  }

  console.log(this);

  for (let j = 0; j < args.length; j++) {
    this [0 + j] = args[j];
  }

  console.log(this)
    
 console.log(this.length);
 return this.length;
}

const newLength = numbers.unshift(72,12,13);
