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