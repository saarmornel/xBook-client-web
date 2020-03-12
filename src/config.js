const isLocal = process.env.REACT_APP_ENV === 'local' ? true : false;
export const serverUrl = isLocal ? 'http://localhost' : 'https://glacial-fortress-14735.herokuapp.com';
export const authCookie = 'authToken';
export const FB_URL = `${serverUrl}/api/auth/facebook/`;
export const CLIENT_URL = 'https://xbook-web.herokuapp.com/';
export const APP_NAME = 'xBook';
export const genericPhonePattern = '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$';