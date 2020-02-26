import { observable, autorun, action, computed, decorate, reaction, runInAction } from 'mobx';
import { getMyUser, getUsers, getUser } from "../services/user.service";

class UserStore {
    users = [];     
    isLoadingUsers;
    currentUser;    
    isLoadingCurrentUser;
    selectedUser;
    isLoadingSelectedUser;
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
})

const userStore = new UserStore();
export default userStore;