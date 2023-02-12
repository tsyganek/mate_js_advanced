'use strict'

// Кажуть, професіонали своєї справи розуміють клієнта з півслова. Ти в це віриш?

// У Mate Barbershop навіть є свої рівні барберів. Стажери розуміють клієнтів з 10 слів, junior - з 7, middle - з 5, а для senior вистачає всього 3 слова!

// Напиши функцію getOrder, яка приймає рядок wish та число wordsCount і повертає рядок де будуть перші wordsCount слів з wish.

const wish = `I want a short stylish haircut, like my brother's`;

function getOrder (wish, num) {
    let wishArr = wish.split(" ");
    wishArr = wishArr.splice(0, num);
  return wishArr

}
getOrder(wish, 4); // 'I want a short'
getOrder(wish, 6); // 'I want a short stylish haircut,'
