'use strict';

/**
 * Implement method join
 */

let source = [5,6,7];

source.join2 = function(separator) {
let str = "";
let sep;

if (separator === undefined) {
    sep = ",";
} else { sep = separator}

if (this.length === 0){
    str = 0;
    console.log(str)
   return str;
}

if (this.length === 1) {
str = this[0];
console.log(str)
return str;
}

for (let i = 0; i < this.length - 1; i++){
 str = str + this[i] + sep;
}

str = str + this[this.length - 1]

console.log(str)
return str

}

source.join2()
source.join2(" ") 
source.join2("-")
source.join2('[object]')