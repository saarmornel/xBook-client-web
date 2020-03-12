import {observable, autorun,reaction, action, decorate, computed} from 'mobx';
import AsyncStorage from '@callstack/async-storage';
import { authCookie } from "../config";

class AuthStore {
    token=null;
    isLoading = true;

    setToken(token) {
        this.isLoading = true;
        AsyncStorage.setItem(authCookie, token)
        .then( action(() => {this.token = token}) )
        .finally( action(() => {this.isLoading = false}) );
    }

    logout() {
        this.isLoading = true;
        AsyncStorage.removeItem(authCookie)
        .then( action(() => {this.token = null}) )
        .finally( action(() => {this.isLoading = false}) );
    }

    loadToken() {
        this.isLoading = true;
        AsyncStorage.getItem(authCookie)
        .then( action((token) => {this.token = token}) )
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

const authStore = new AuthStore()
export default authStore;