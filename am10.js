'use strict'

// Техніки повідомили, що робот Polly прислав на наш пульт охорони сигнал тривоги, його системи вийшли з ладу. Допоможи знайти робота за допомогою функції searchRobot. Вона приймає об'єкт robot, та масив всіх відомих нам робочих місць workPlaces, де може перебувати робот в даний момент. Результатом пошуково-рятувальної місії, має бути назва місця, в якому зараз знаходиться робот.

const robot = {
    name: 'Sundar',
  };
  const workPlaces = [
    {
      name: 'mate academy',
      staff: ['Roma', 'Misha', 'Yura'],
    },
    {
      name: 'Google',
      staff: ['Larry', 'Sergey', 'Sundar'],
    },
  ];

function searchRobot (robot, workPlaces){
    for (const workPlace of workPlaces) {
        let staff = workPlace.staff;
       
        if (staff.includes(robot.name)) {
            return workPlace.name;
        }
    }
}

  searchRobot(robot, workPlaces) // повертає 'Google';
  