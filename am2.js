'use strict';

/**
 * Implement method join
 */

source = [0, 1, 2, 3];

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string;
    for (let i = 0; l < [].__proto__.length - 1; i++) {
        string = string + [].__proto__[i] + separator;
    }
    string = string + [].__proto__[[].__proto__.length - 1]
  };
}