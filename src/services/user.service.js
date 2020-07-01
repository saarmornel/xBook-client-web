import { getHeaders, handleErrors, json } from './helpers';
import { serverUrl } from '../config';
import authStore from '../stores/auth.store';

const headers = () => getHeaders(authStore.token);

const userApi = '/api/user';
const userUrl = serverUrl + userApi;

export const getMyUser = () => {
    return fetch(userUrl + '/me',{
        headers: headers()
    })
    .then(handleErrors).then(json)
}

export const getUsers = (page) => {
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

export const updateMyUser = (updatedUser) => {
    return fetch(userUrl + '/me', {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify(updatedUser)
    }).then(handleErrors).then(json)
}
