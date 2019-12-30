import {observable, autorun, action} from 'mobx';
import AsyncStorage from '@callstack/async-storage';
import { authCookie } from "../config";
import userStore from './user.store';

class AuthStore {
    @observable token;
    @observable isLoading = false;

    @action setToken(token) {
        this.isLoading = true;
        AsyncStorage.setItem(authCookie, token)
        .then( action(() => {this.token = token}) )
        .then(() => userStore.pullCurrentUser())
        .finally( action(() => {this.isLoading = false}) );
    }

    @action logout() {
        this.isLoading = true;
        AsyncStorage.removeItem(authCookie)
        .then( action(() => {this.token = undefined}) )
        .then(() => userStore.forgetCurrentUser())
        .finally( action(() => {this.isLoading = false}) );
    }

    @action loadToken() {
        this.isLoading = true;
        AsyncStorage.getItem(authCookie)
        .then( action((token) => {this.token = token}) )
        .then(() => this.token ? userStore.pullCurrentUser() : null)
        .finally( action(() => {this.isLoading = false}) );
    }

}

export default new AuthStore();