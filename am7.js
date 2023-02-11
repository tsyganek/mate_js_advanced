'use strict'

const numbers = [1, 2, 3];

numbers.unshift = function(...el) {
    let arr = [...el];
    this = [...el, ...this]

    console.log('newArr = ',this);
    console.log('length', this.length)
    return newArr.length;
  };


const newLength = numbers.unshift(72);
