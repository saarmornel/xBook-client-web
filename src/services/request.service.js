import { getHeaders, handleErrors, json } from './helpers';
import { serverUrl } from '../config';
import authStore from '../stores/auth.store';

const headers = () => getHeaders(authStore.token);
const requestApi = '/api/request';
const requestUrl = serverUrl + requestApi;

export const getIncoming = () => {
    return fetch(`${requestUrl}/incoming`,{
        headers: headers()
    })
    .then(handleErrors).then(json)
}


export const getOutgoing = () => {
    return fetch(`${requestUrl}/outgoing`,{
        headers: headers()
    })
    .then(handleErrors).then(json)
}

export const addRequest = async (book, receiving) => {
    return fetch(requestUrl, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify({book, receiving})
    }).then(handleErrors).then(json)
}

export const deleteRequest = async (request) => {
    return fetch(requestUrl + '/' + request, {
        method: 'DELETE',
        headers: headers(),
        body: JSON.stringify({})
    }).then(handleErrors).then(json);
}

export const updateReuestStatus = async (request,status) => {
    return fetch(requestUrl + '/' + request, {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify({status})
    }).then(handleErrors).then(json);
}

export const updateRequestRead = async (request) => {
    return fetch(requestUrl + '/' + request, {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify({read: {receiving: true}})
    }).then(handleErrors).then(json);
}