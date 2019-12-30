import * as googleBooks from './googleBooks.serivce';

export const getBook = (id) => {
    return googleBooks.getBookById(id);
}

export const searchBook = (bookName) => {
    return googleBooks.searchBook(bookName);
}