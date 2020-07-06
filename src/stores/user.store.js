import { observable, autorun, action, computed, decorate, reaction, runInAction } from 'mobx';
import { getMyUser, getUsers, getUser, updateMyUser,addFriend,removeFriend } from "../services/user.service";
import bookStore from './book.store';

class UserStore {
    users = [];     
    isLoadingUsers = true;
    currentUser;    
    isLoadingCurrentUser = true;
    selectedUser;
    isLoadingSelectedUser = true;
    usersPage= 0;
    bookStore;

    constructor(bookStore) {
        this.bookStore = bookStore;
    }

    pullNextPage() {
        this.usersPage++;
        this.pullUsers();
    }

    pullCurrentUser() {
        this.isLoadingCurrentUser = true;
        getMyUser()
            .then(action(user => { this.currentUser = user }))
            .finally(action(() => { this.isLoadingCurrentUser = false }));
    }

    updateCurrent(field,value) {
        this.currentUser[field]=value;
        const updatedUser= {};
        updatedUser[field]=value;
        updateMyUser(updatedUser);
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

    addFriend(user) {
        const index = this.currentUser.friends.
        findIndex(friend => friend.id === user.id);
        if(index<0) {
            this.currentUser.friends.push(user);
            addFriend(user.id)
            .then(()=>this.bookStore.pullBooks())
            .catch(action(err=>{this.pullCurrentUser();throw err}))
        }
    }

    removeFriend(id) {
        const index = this.currentUser.friends.
        findIndex(friend => friend.id === id);
        if(index>-1) {
            this.currentUser.friends.splice(index,1);
            removeFriend(id)
            .then(()=>this.bookStore.pullBooks())
            .catch(action(err=>{this.pullCurrentUser();throw err}))
        }
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
    pullCurrentUser: action,
    pullSelectedUser: action,
    pullUsers: action,
    pullNextUsers: action,
    forgetCurrentUser: action,
    usersPage: observable,
    updateCurrent: action,
    addFriend: action,
    removeFriend: action,
})

const userStore = new UserStore(bookStore);
export default userStore;