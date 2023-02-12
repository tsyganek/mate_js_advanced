'use strict'

const numbers = [5, 6, 1, 4, 2, 5];

numbers.slice = function(index1, index2) {
    let arr = [];
    let start;
    let end;
    let it;

    if (index1 === undefined) {
        start = 0;
    }

    if (index1 >= 0 && index1 < this.length) {
        start = index1;
    }

    if (index1 >= 0 && index1 > this.length) {
        return 0;
    }

    if (index1 < 0) {
        start = this.length + start;
    }

    if (index2 === undefined || index2 >= this.length) {
        end = this.length;
    }

    if (index2 > 0 && index2 > start) {
        end = index2;
    }

    if (index2 > 0 && index2 < start){
        return 0;
    }

    if (index2 < 0 && index1 < 0 && index2 < index1) {
        return 0;
    }

    if (index2 < 0 && end < -this.length) {
        return 0;
    }

    if (index2 < 0) {
        end = this.length + index2;
    }

    for (let i = 0; i < end; i++){
        arr[i] = this[start+i];
    }

    console.log(arr);
    return arr

  };


const result1 = numbers.slice(0);
const result2 = numbers.slice(3);
const result3 = numbers.slice(-2);
const result4 = numbers.slice(0, -2);
const result5 = numbers.slice(2, -4);
// numbers === [5, 6, 1, 4, 2, 5]
// result1 === [5, 6, 1, 4, 2, 5]
// result2 === [4, 2, 5]
// result3 === [2, 5]
// result4 === [5, 6, 1, 4]
// result5 === []