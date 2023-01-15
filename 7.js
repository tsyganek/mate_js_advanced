'use strict'

// В головному офісі Mate Robot Factory повісили плазму, для трансляції показників компанії. Для початку вирішили виводити туди кругову діаграму з кількістю проданих роботів різних типів.

// Програма, яка буде малювати діаграму, приймає дані у вигляді об'єкта, де ключ - це зріз на діаграмі, а значення - це його розмір у градусах.

// Створи функцію generateChart, яка буде приймати об'єкт статистики продажів роботів (де ключ - тип робота, а значення - кількість проданих роботів) і повертає об'єкт з однаковими ключами, але значення - це градуси для кругової діаграми.

// Округлюй градуси до найближчого цілого.

// Приклад:

function generateChart(statistics) {
    const values = Object.values(statistics);
    let sum = 0;

    for (let value of values) {
        sum += value;
    }

    let newStatistics = {};

    const entries = Object.entries(statistics);

    for (let entry of entries) {
        let obj = {};
        let key = entry[0];

        obj[key] = Math.round(entry[1]/sum * 360);
        newStatistics = Object.assign(newStatistics, obj);
    }

    return newStatistics;
  }

generateChart({ cleaner: 2, driver: 8 }) === { cleaner: 72, driver: 288 }
generateChart({ cleaner: 2, driver: 8, washer: 14 }) === { cleaner: 30, driver: 120, washer: 210 }
generateChart({ cleaner: 1 }) === { cleaner: 360 }