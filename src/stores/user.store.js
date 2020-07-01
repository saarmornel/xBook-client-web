import { observable, autorun, action, computed, decorate, reaction, runInAction } from 'mobx';
import { getMyUser, getUsers, getUser, updateMyUser } from "../services/user.service";

class UserStore {
    users = [];     
    isLoadingUsers = true;
    currentUser;    
    isLoadingCurrentUser = true;
    selectedUser;
    isLoadingSelectedUser = true;
    usersPage= 0;

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
})

const userStore = new UserStore();
export default userStore;