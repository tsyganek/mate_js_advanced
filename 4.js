'use strict'

// Наш робот Чарлі, переміг на міжнародних змаганнях з поїдання машинного масла!!! Ми виграли грант на побудову ще 1000 таких же крутих роботів як наш Чарлі. На жаль, робот Чарлі - це доволі старий робот (воно і не дивно що він потребує стільки масла), його креслення давно припадають пилом у архівах. Давай, щоб не ритися в архівах, просто зробимо createRobotCopy функцію, яка прийматиме робота robot і повертатиме його нову копію, але з серійним номером на 1 більшу.


function createRobotCopy(robot) {
    let robot2 = {...robot};

    robot2.serial = robot.serial + 1;
    
    return robot2
  }

const charlie = {
    serial: 100,
    chipVer: 12,
    wheels: 6,
  }
  
  const marlie = createRobotCopy(charlie);
  