import { getHeaders, handleErrors, json } from './helpers';
import { serverUrl } from '../config';
import authStore from '../stores/auth.store';

const headers = () => getHeaders(authStore.token);

const userApi = '/api/user';
const userUrl = serverUrl + userApi;
const booksUrl = userUrl + '/books';

export const updateBook = async (id, available) => {
    return fetch(booksUrl, {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify({id, available})
    }).then(handleErrors).then(json);
}

export const addBook = async (id, available) => {
    return fetch(booksUrl, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify({id, available})
    }).then(handleErrors).then(json);
}

export const deleteBook = async (bookId) => {
    return fetch(booksUrl + '/' + bookId, {
        method: 'DELETE',
        headers: headers(),
        body: JSON.stringify({})
    }).then(handleErrors).then(json);
}

export const getMyUser = () => {
    return fetch(userUrl + '/me',{
        headers: headers()
    })
    .then(handleErrors).then(json)
}

export const getUsers = (page = 0) => {
    return fetch(`${userUrl}?page=${page}`,{
        headers: headers()
    })
    .then(handleErrors).then(json)
}

export const getUser = (id) => {
    return fetch(`${userUrl}/${id}`,{
        headers: headers()
    })
    .then(handleErrors).then(json)
}
