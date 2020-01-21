import { observable, action, computed, decorate } from 'mobx';
import { addBook, updateBook, deleteBook, getBooks, getMyBooks} from "../services/book.service";

class BookStore {

    booksPage = 0;
    books = [];
    isLoadingBooks;

    pullNextPage() {
        this.booksPage++;
        this.pullBooks();
    }

    pullBooks() {
        this.isLoadingBooks = true;
        getBooks(this.booksPage)
            .then(action(books => { this.books = this.books.concat(books) }))
            .finally(action(() => { this.isLoadingBooks = false; }));
    }

    // todo: individual isLoading
    pullMyBooks() {
        this.isLoadingBooks = true;
        getMyBooks()
            .then(action(books => { this.books = books }))
            .finally(action(() => { this.isLoadingBooks = false }));
    }

    addBook(id, available) {
        const index = this.currentUser.books.findIndex(book => book.id === id);
        if(index>-1) return;
        addBook(id, available)
        .then(action( ()=>{this.pullCurrentUser()} ))
    }

    updateBook(id, available) {
        const index = this.currentUser.books.findIndex(book => book.id === id);
        if(index>-1) {
            this.currentUser.books[index].available = available;
            updateBook(id, available)
            .catch(action(err => { this.pullCurrentUser(); throw err }));      
        };

    }


    deleteBook(id) {
        const index = this.currentUser.books.findIndex(book => book.id === id);
        if (index > -1) {
            this.currentUser.books.splice(index, 1);
            deleteBook(id)
            .catch(action(err => { this.pullCurrentUser(); throw err }));
        }
    }

}
decorate(BookStore, {
    addBook: action,
    updateBook: action,
    deleteBook: action,
    pullBooks: action,
    booksPage: observable,
    books: observable,
    isLoadingBooks: observable,
    pullNextBooks: action,
    pullMyBooks: action,
    nextPage: action
})

const bookStore = new BookStore();
export default bookStore;