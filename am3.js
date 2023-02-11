


// const numbers = [5, 6, 1, 4, 2, 5];

const numbers = [143, 7, 43, 143, 11, 50, 7];

numbers.indexOf = function(value, fromIndex) {
    let start;
  
    if (fromIndex === undefined) {
      start = 0;
    }
  
    if (fromIndex >= 0 && fromIndex < this.length) {
      start = fromIndex;
    }
  
    if (fromIndex > 0 && fromIndex > this.length) {
      return -1;
    }
  
    if (fromIndex < 0 && fromIndex > -this.length) {
      start = this.length + fromIndex;
    }
  
    if (fromIndex < 0 && fromIndex < -this.length) {
      start = 0;
    }
  
    for (let i = start; i < this.length; i++) {
      if (this[i] === value) {
        return i;
      };
    }
  
    return -1;
  };
  

// numbers.indexOf(5) === 0
// numbers.indexOf(7) === -1
// numbers.indexOf(1, 3) === -1
// numbers.indexOf(5, -2) === 5

numbers.indexOf(50, -1);