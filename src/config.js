const isLocal = process.env.REACT_APP_ENV === 'local' ? true : false;
export const serverUrl = isLocal ? 'http://localhost' : 'https://glacial-fortress-14735.herokuapp.com';
export const authCookie = 'authToken';

console.log('isLocal:',true)