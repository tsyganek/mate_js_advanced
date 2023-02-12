'use strict'

// Неподалік від цивілізації, що писала задом наперед археологи знайшли нові сувої. Здається мова їх сусідів була доволі схожа. Але перевертали вони тільки слова, а не цілі речення. Розшифровувати їхні послання доволі рутинна робота, погодься. Було б приємно мати функцію reverseMessage, яка приймала б послання message, перевертали кожне слово та повертала результат.

function reverseMessage(message) {
    let messageArr = message.split(' ');
    let newMessage = '';

    for (let i = 0; i < messageArr.length; i++) {
        let arr = [];
        arr = messageArr[i].split('');
        arr = arr.reverse();
        arr = arr.join('');
        newMessage = newMessage + arr + ' ';
    }
    newMessage = newMessage.slice(0, -1);
    
    return newMessage;
}

reverseMessage('tpircsavaJ si eht egaugnal fo erutuf');
// 'Javascript is the language of future'
