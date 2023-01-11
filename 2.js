'use strict'

// Дослідницький центр Mate Robot Factory виявив, що роботи, у яких є партнер, не тільки працюють продуктивніше, але й зношуються набагато повільніше! Команда зверху: "Кожній тварі - по парі!".

// Створи функцію makeRobotsPair, яка приймає 2 об'єкти (роботи) та додає до кожного властивість partner з посиланням на партнера (інший об'єкт).

// Якщо ми передамо 1 робота, запиши йому в поле partner значення null.

function makeRobotsPair(robot1, robot2) {
    if (robot2 === undefined){
        robot1.partner = null
    } else {
        robot1.partner = robot2;
        robot2.partner = robot1;
    }
  }
  

const charlie = { name: 'Charlie' };
const joy = { name: 'Joy' };
const lordy = { name: 'Lordy' };

makeRobotsPair(joy, lordy);

makeRobotsPair(joy)



