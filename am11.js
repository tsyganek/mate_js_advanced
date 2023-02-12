'use strict'

// Mate Library зараз переживає не найкращі часи. Бібліотекаря утримувати дуже дорого, тому останні 5 років, бібліотека працює у режимі "прийшов, взяв, пішов". При цьому вірні читачі повертають книги, але не на свої місця. В старі добрі часи усі книги в бібліотеці були відсортовані в алфавітному порядку. Зараз на полицях хаос. І тут на допомогу прийдемо ми і роботи Mate Robot Factory. Буде весело? Не думаю. Для початку, треба зняти всі книги з полиць в бібліотеці, та відсортувати їх.

// Напиши функцію sortBooks, яка приймає масив стелажів shelves (масиви з книгами) та повертає масив книг в алфавітному порядку.


function sortBooks (shelves) {
    let books = [];
    books = books.concat(...shelves);
    books = books.sort();
    return books;
}

sortBooks([
    ['Going Over', 'Brazen'],
    ['The Enemy'],
    ['Followers', 'Belle Epoque']
  ]); // ['Belle Epoque', 'Brazen', 'Followers', 'Going Over', 'The Enemy']

  
