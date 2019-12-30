/*
    take only the needed info from api
*/
const cleanseBook = (book) => {
    const newBook={};
    newBook.id=book.id;
    newBook.title=book.volumeInfo.title;
    newBook.thumbnail=book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail
    newBook.author=book.volumeInfo.authors && book.volumeInfo.authors.join(', ');
    newBook.more=book.volumeInfo.infoLink;
    return newBook;
}

export const searchBook = async (bookName) => {
    try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`);
        const resJson = await res.json();
        if(!resJson.totalItems) return [];
        const books = resJson.items;
        const fewBooks = books.slice(0, 4);
        const formattedBooks = fewBooks.map(cleanseBook);
        return formattedBooks;
    } catch(error) {
        console.log('httpError: ',error);
        console.log('response: ',res);
    }

}

export const getBookById = async (id) => {
    try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        const book = await res.json();
        const formattedBook = cleanseBook(book);
        return formattedBook;
    } catch(error) {
        console.log('httpError: ',error);
        console.log('response: ',res);
    }
}
