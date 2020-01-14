import { getHeaders, handleErrors, json } from './helpers';
import { serverUrl } from '../config';
import authStore from '../stores/auth.store';

const headers = () => getHeaders(authStore.token);
const bookApi = '/api/book';
const bookUrl = serverUrl + bookApi;

export const searchBook = (name) => {
    return fetch(`${bookUrl}?q=${name}`,{
        headers: headers()
    })
    .then(handleErrors).then(json)
}
