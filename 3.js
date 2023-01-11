'use strict'

// При потраплянні нових роботів у Mate warehouse, виконується багато рутинної роботи, для початку, потрібно зробити запис в журналі інвентаризації, потім змінити налаштування робота, щоб він знав своє місце роботи і багато іншого. Давай, для початку, автоматизуємо процес реєстрації роботів на складі? Напиши функцію registerRobot, яка приймає два об'єкти robot та warehouse.

// Схема об'єктів:

// robot {
//   id
//   skill
//   currentWorkPlace
// }
// warehouse {
//   aiStaff
//   currentStatus
//   boxes
// }

// Функція має додавати id нового робота в масив aiStaff, а роботу в currentWorkPlace записувати посилання на об'єкт warehouse.

function registerRobot(robot, warehouse) {
    const id = robot.id;
    let aiStaffArray = warehouse.aiStaff;

    aiStaffArray.push(id);
    robot.currentWorkPlace = warehouse;
  }
  