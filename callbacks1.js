'use strict'

// Кожен програміст просто мусить написати свій "велосипед". Ну хоча б калькулятор!

// Напиши функцію calculate, яка приймає масив з 2 чисел operands, та callback-функцію operation, що приймає 2 числа. Поверни з calculate результат operation запущеної з числами з масиву operands.

// Приклад:

const sum = (a, b) => a + b;
calculate([2, 6], sum); // 8

const multiply = (a, b) => a * b;
calculate([2, 6], multiply); // 12

function calculate (operand, operation){
    operation(operand[0], operand[1])
}




