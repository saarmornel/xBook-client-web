import { observable, autorun, action, computed, decorate, reaction, runInAction } from 'mobx';
import { getMyUser, getUsers, addBook, updateBook, deleteBook, getUser } from "../services/user.service";
import authStore from "./auth.store";

const getBooks = (books, available) => books.filter(
    book => book.available == available
).map(book => book.data);

class UserStore {
    users = [];     // users.books will be with only available books. todo: should be sorted by closeness/relationship
    isLoadingUsers;
    currentUser;    // users.books will be with all books: {book,available}
    isLoadingCurrentUser;
    selectedUser;
    isLoadingSelectedUser;
    usersPage;
    authStore;
    constructor(authStore) {
        this.authStore = authStore;
    }

    get myAvailableBooks() {
        if(!this.currentUser || !this.currentUser.books) {
            return [];
        }
        return getBooks(this.currentUser.books, true).filter(Boolean);
    }

    get myNonAvailableBooks() {
        if(!this.currentUser || !this.currentUser.books) {
            return [];
        }
        return getBooks(this.currentUser.books, false).filter(Boolean)
    }

    get usersBooks() {
        let books = [];
        const users = this.users.slice();
        console.log('users',users)
        users.length && 
        users.map(user => 
            {  
                console.log('user',user);
                user&&
                user.books&&
                user.books.length && 
                user.books.map(({data,updatedAt}) => {

                    data&&
                    books.push({ ...data,
                        updatedAt,
                        userName: user.fullName, 
                        userThumbnail: user.picture, 
                        userId: user.id }
                    )
                })
            }
        );
        return books;
    }

    pullCurrentUser() {
        this.isLoadingCurrentUser = true;
        getMyUser()
            .then(action(user => { this.currentUser = user }))
            .finally(action(() => { this.isLoadingCurrentUser = false }));
    }

    pullSelectedUser(id) {
        this.isLoadingSelectedUser = true;
        getUser(id)
            .then(action(user => { this.selectedUser = user }))
            .finally(action(() => { this.isLoadingSelectedUser = false }));
    }

    pullUsers() {
        this.isLoadingUsers = true;
        getUsers(this.usersPage)
            .then(action(users => { this.users = this.users.concat(users) }))
            .finally(action(() => { this.isLoadingUsers = false; }));
    }

    addBook(id, available) {
        addBook(id, available)
        .then(action( ()=>{this.pullCurrentUser()} ))
    }

    updateBook(id, available) {
        updateBook(id, available)
        .then(action(()=>{this.pullCurrentUser()}))
    }


    deleteBook(id) {
        const index = this.currentUser.books.findIndex(book => book.id === id);
        if (index > -1) this.currentUser.books.splice(index, 1);
        deleteBook(id)
        .catch(action(err => { this.pullCurrentUser(); throw err }));
    }

    forgetCurrentUser() {
        this.currentUser = undefined;
    }

}
decorate(UserStore, {
    users: observable,
    isLoadingCurrentUser: observable,
    isLoadingSelectedUser: observable,
    isLoadingUsers: observable,
    currentUser: observable,
    selectedUser: observable,
    myAvailableBooks: computed,
    myNonAvailableBooks: computed,
    usersBooks: computed,
    pullCurrentUser: action,
    pullSelectedUser: action,
    pullUsers: action,
    addBook: action,
    updateBook: action,
    deleteBook: action,
    forgetCurrentUser: action,
    usersPage: observable
})

const userStore = new UserStore(authStore);
export default userStore;

reaction(() => userStore.usersPage, () => {
    userStore.pullUsers();
},
    {
        onError(e) {
            console.error('error load users on page',userStore.usersPage)
        }
    }
);

reaction(() => userStore.authStore.token, () => {
    if(!userStore.authStore.token) return userStore.forgetCurrentUser();
    runInAction(() => {
        userStore.usersPage = 0;
    });
    userStore.pullCurrentUser();
},
    {
        onError: (e) => {
            //toodo:remove token
            console.log(userStore.authStore)
            userStore.authStore.logout();
            console.error('error load current user:',e)
        }
    }
);