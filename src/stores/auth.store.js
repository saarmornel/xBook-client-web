import {observable, autorun, action, decorate, computed} from 'mobx';
import AsyncStorage from '@callstack/async-storage';
import { authCookie } from "../config";
import userStore from './user.store';

class AuthStore {
    token;
    isLoading = false;

    setToken(token) {
        this.isLoading = true;
        return AsyncStorage.setItem(authCookie, token)
        .then( action(() => {this.token = token}) )
        .then(() => userStore.pullCurrentUser())
        .finally( action(() => {this.isLoading = false}) );
    }

    logout() {
        this.isLoading = true;
        return AsyncStorage.removeItem(authCookie)
        .then( action(() => {this.token = undefined}) )
        .then(() => userStore.forgetCurrentUser())
        .finally( action(() => {this.isLoading = false}) );
    }

    loadToken() {
        if(this.token) return this.token;
        this.isLoading = true;
        return AsyncStorage.getItem(authCookie)
        .then( action((token) => {this.token = token}) )
        .then(() => this.token ? userStore.pullCurrentUser() : null)
        .finally( action(() => {this.isLoading = false}) );
    }

    get isLoggedIn() {
        return this.token ? true : false;
    }

}
decorate(AuthStore, {
    token: observable,
    isLoading: observable,
    setToken: action,
    logout: action,
    loadToken: action,
    isLoggedIn: computed,
});

export default new AuthStore();