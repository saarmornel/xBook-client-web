import { serverUrl } from '../config';
import { getHeaders, handleErrors, json } from './helpers';

const authApi = '/api/auth';
const authUrl = serverUrl + authApi;


export const authFacebook = () => {
    return fetch(authUrl + '/facebook')
    .then(handleErrors).then(json);
}