import { CLIENT_URL,APP_NAME } from "../config";

export const getHeaders = (token) => { return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token && `Bearer ${token}`
} };

export const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const json = response => response.json();

export const shareApp = () => {
    if(navigator.share) {
        navigator.share({
          title: APP_NAME,
          text: 'Trade books with your friends',
          url: CLIENT_URL
        })
        .then(() => console.log('Share complete'))
        .error((error) => console.error('Could not share at this time', error))
      }
}