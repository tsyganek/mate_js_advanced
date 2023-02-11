


// const numbers = [5, 6, 1, 4, 2, 5];

const numbers = [143, 7, 43, 143, 11, 50, 7];

numbers.indexOf = function(value, searchStart) {
    let start;
  
    if (searchStart === undefined) {
      start = 0;
    } else if (searchStart < 0 && searchStart > -this.length) {
      start = numbers.length + searchStart;
    } else if (searchStart < 0 && searchStart < -this.length) {
      start = 0;
    } else if (searchStart > 0 && searchStart <= this.length) {
      start = searchStart;
    } else {
      return -1;
    }
    console.log('start', start);
  
    for (let i = start; i < this.length; i++) {
      if (this[i] === value) {
        console.log('index',i);
        return i;
      };
    }
   console.log(-1)
    return -1;
  };
  

// numbers.indexOf(5) === 0
// numbers.indexOf(7) === -1
// numbers.indexOf(1, 3) === -1
// numbers.indexOf(5, -2) === 5

numbers.indexOf(50, -1);