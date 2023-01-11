'use strict'

// аш робот Кобі візьме участь у міжгалактичних змаганнях та інші фабрики з виробництва роботів вирішили допомогти нам відстояти честь галактики! Вони нададуть нам свої найкращі деталі. Давай встановимо нові деталі нашого робота Kobi?

// Створи функцію upgradeRobot, яка приймає об'єкт robot та масив об'єктів з деталями parts. Ці деталі слід присвоїти роботу за допомогою методу Object.assign().

function upgradeRobot(robot, parts) {
    let newRobot = robot;
    const {...rest} = parts;

    for ( let i = 0; i < parts.length; i++) {
        newRobot  = Object.assign(robot, parts[i]);
        console.log(newRobot);
    }
}
  

const kobi = {
  chipVer: 9,
  serialNo: 413,
  wheels: 2,
}

const parts = [
  { wheels: 6 },
  { chipVer: 16 },
  { displays: 2 },
];

upgradeRobot(kobi, parts)

kobi.serialNo === 413
kobi.wheels === 6
kobi.chipVer === 16
kobi.displays === 2