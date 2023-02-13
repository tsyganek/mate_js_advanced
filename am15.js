'use strict'

// Онлайн шопінг з кожним днем набирає обертів. Само собою Mate Shop і тут намагається зайняти свою нішу. Наші роботи цілодобово приймають дзвінки людей з усього світу, обробляють їх та формують замовлення. Ми дуже user friendly, тому авторизовані користувачі відтепер можуть зробити замовлення по SMS, надіславши кількість та типи продуктів, а наші роботи навчені читати та розуміти ці SMS. Мали б бути...

// Напиши функцію makeOrderList, яка приймає рядок order, та повертає об'єкт, де ключами будуть типи продуктів, а значеннями - їхня кількість.

// в замовленні кількість стоїть перед типом продукта
// продукти в замовленні розділені комою з одним пробілом
// якщо назва складається з декількох слів, запиши її у snake_case
// Для порожнього рядка поверни порожній об'єкт.

function makeOrderList(order) {
    let orderObj = {};
    if (order === '') {
        return orderObj;
    };

    const orderArr = order.split(', ');

    for (let orderItem of orderArr) {
        orderItem = orderItem.split(' ');
        
        let quantity;
        let name;

        if (orderItem.length > 2) {
            quantity = Number(orderItem.shift());
            name = orderItem.join("_");
            orderObj[name] = quantity;
        } else if (
            orderItem.length = 2) {
                name = orderItem[1];
                quantity = Number(orderItem[0]);
                orderObj[name] = quantity;
            }
        }

    return orderObj;

}

const order = '1 coca cola, 5 chicken nuggets, 20 egg';
const list = makeOrderList(order);

/*
list === {
  coca_cola: 1,
  chicken_nuggets: 5,
  egg: 20,
}
*/