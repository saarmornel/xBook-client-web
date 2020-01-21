import { getHeaders, handleErrors, json } from './helpers';
import { serverUrl } from '../config';
import authStore from '../stores/auth.store';

const headers = () => getHeaders(authStore.token);
const bookApi = '/api/book';
const bookUrl = serverUrl + bookApi;

export const searchBook = (name) => {
    return fetch(`${bookUrl}/search?q=${name}`,{
        headers: headers()
    })
    .then(handleErrors).then(json)
}

export const getBooks = async (page) => {
    return fetch(`${bookUrl}?page=${page}`, {
        headers: headers(),
    }).then(handleErrors).then(json);
}

export const getMyBooks = async () => {
    return fetch(`${bookUrl}/me`, {
        headers: headers(),
    }).then(handleErrors).then(json);
}

export const updateBook = async (id, available) => {
    return fetch(bookUrl + '/' + id, {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify({id, available})
    }).then(handleErrors).then(json);
}

export const addBook = async (id, available) => {
    return fetch(bookUrl, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify({id, available})
    }).then(handleErrors).then(json);
}

export const deleteBook = async (id) => {
    return fetch(bookUrl + '/' + id, {
        method: 'DELETE',
        headers: headers(),
        body: JSON.stringify({})
    }).then(handleErrors).then(json);
}
