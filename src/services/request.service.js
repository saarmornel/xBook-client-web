import { getHeaders, handleErrors, json } from './helpers';
import { serverUrl } from '../config';
import authStore from '../stores/auth.store';
import { getBook } from "./bookDetails.service";

const headers = () => getHeaders(authStore.token);
const requestApi = '/api/request';
const requestUrl = serverUrl + requestApi;

export const populateRequest = async (request) => {
    const data = await getBook(request.book);
    return {...request,book: data,id:request._id};
}

export const populateRequests = async (requests) => {
    return await Promise.all(
        requests.map(populateRequest)
    );
}

export const getIncoming = () => {
    return fetch(`${requestUrl}/incoming`,{
        headers: headers()
    })
    .then(handleErrors).then(json)
    .then(populateRequests)
}


export const getOutgoing = () => {
    return fetch(`${requestUrl}/outgoing`,{
        headers: headers()
    })
    .then(handleErrors).then(json)
    .then(populateRequests)
}

export const addRequest = async (book, receiving) => {
    return fetch(requestUrl, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify({book, receiving})
    }).then(handleErrors).then(json)
    .then(populateRequest);
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