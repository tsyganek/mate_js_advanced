'use strict';

/**
 *   Time flies, standards change. Let's get rid of the routine of changing the
 * date format. Create a `formatDate` function that accepts the `date` string,
 * the old `fromFormat` array and the new `toFormat` array. Function returns
 * given date in new format.
 *   The function can change a separator, reorder the date parts of convert a
 * year from 4 digits to 2 digits and back.
 *   When converting from YYYY to YY just use 2 last digit (1997 -> 97).
 *   When converting from YY to YYYY use 20YY if YY < 30 and 19YY otherwise.
 *
 * Examples:
 *
  */

// function formatDate (date, fromFormat, toFormat) {
 
//     let newFormatDate = date.split(fromFormat[3]);

//     let dateObj = {};

//     for (let i = 0; i < fromFormat.length - 1; i++) {
//         dateObj[fromFormat[i]] = newFormatDate[i];
//     }

//     for (let i = 0; i < toFormat.length; i++) {
  
//         for (let key in dateObj) {

//         if (key === toFormat[i]) {
//             toFormat[i] = dateObj[key];
//         }

//         if (key.includes(toFormat[i])) {
//             toFormat[i] = dateObj[key].substring(2,4)
//         } 

//         if (toFormat[i].includes(key)) {
//            if (dateObj[key] < 30) {
//             toFormat[i] = `20${dateObj[key]}`
//            } else { toFormat[i] = `19${dateObj[key]}`}
//         }

//     }}
//     console.log(toFormat)

//    let sep = toFormat.pop();
//    newFormatDate = toFormat.join(sep)

//    console.log(newFormatDate);
//    console.log(typeof(newFormatDate))
//    return newFormatDate
// }
    
function formatDate(date, fromFormat, toFormat) {
    let newFormatDate = date.split(fromFormat[3]);
  
    const dateObj = {};
  
    for (let i = 0; i < fromFormat.length - 1; i++) {
      dateObj[fromFormat[i]] = newFormatDate[i];
    }
  
    for (let i = 0; i < toFormat.length; i++) {
      for (const key in dateObj) {
        if (key === toFormat[i]) {
          toFormat[i] = dateObj[key];
        }
  
        if (key.includes(toFormat[i])) {
          toFormat[i] = dateObj[key].substring(2, 4);
        };
  
        if (toFormat[i].includes(key)) {
          if (dateObj[key] < 30) {
            toFormat[i] = `20${dateObj[key]}`;
          } else {
            toFormat[i] = `19${dateObj[key]}`;
          }
        }
      }
    }
  
    const sep = toFormat.pop();
  
    newFormatDate = toFormat.join(sep);
    console.log(newFormatDate, typeof(newFormatDate));
    return newFormatDate;
  }


  




formatDate(
     '2020-02-18',
    ['YYYY', 'MM', 'DD', '-'],
     ['YYYY', 'MM', 'DD', '.'],
    ) // '2020.02.18'
    
formatDate(
    '2020-02-18',
    ['YYYY', 'MM', 'DD', '-'],
    ['DD', 'MM', 'YYYY', '.'],
    ) // '18.02.2020'
    
formatDate(
    '18-02-2020',
    ['DD', 'MM', 'YYYY', '-'],
    ['DD', 'MM', 'YY', '/'],) // '18/02/20'
    
formatDate(
    '20/02/18',
    ['YY', 'MM', 'DD', '/'],
    ['YYYY', 'MM', 'DD', '.'],
    ) // '2020.02.18'
    
    formatDate(
      '97/02/18',
    ['YY', 'MM', 'DD', '/'],
     ['DD', 'MM', 'YYYY', '.'],
    ) // '18.02.1997'
