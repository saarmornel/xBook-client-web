const isLocal = process.env.REACT_APP_ENV === 'local' ? true : false;
export const serverUrl = isLocal ? 'http://localhost' : 'https://glacial-fortress-14735.herokuapp.com';
export const authCookie = 'authToken';
export const FB_URL = `${serverUrl}/api/auth/facebook/`;
export const CLIENT_URL = 'https://xbook-web.herokuapp.com/';
export const APP_NAME = 'xBook';
console.log('isLocal:',true)