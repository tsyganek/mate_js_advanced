'use strict'

// Дата виготовлення наших роботів зберігається у форматі YYYY-MM-DD, твоя задача перевести цю дату у новий формат DD.MM.YYYY, щоб привести всі дати до нового стандарту компанії. Створи функцію formatDate, яка прийматиме рядок date, та повертатиме новий рядок у правильному форматі.

// Приклад:

function formatDate (date) {
    let arrDate = date.split("-");
    arrDate = arrDate.reverse();
    arrDate = arrDate.join(".")
    console.log(arrDate)

    return arrDate

}

formatDate('2020-02-18') // '18.02.2020'
