import { getBook } from "./bookDetails.service";
import { getHeaders, handleErrors, json } from './helpers';
import { serverUrl } from '../config';
import authStore from '../stores/auth.store';

const headers = getHeaders(authStore.token);

const userApi = '/api/user';
const userUrl = serverUrl + userApi;
const booksUrl = userUrl + '/books';

const populateUserBooks = async (user) => {
    user.books = await Promise.all(user.books.map(async (book) => {
        book.data = await getBook(book.id);
        return book;
    } ) );
    return user;
}

const populateUsersBooks = async (users) => {
    const newUsers = await users.map( populateUserBooks );
    return newUsers;
}

export const updateBook = async (id, available) => {
    return fetch(booksUrl, {
        method: 'PUT',
        headers,
        body: JSON.stringify({id, available})
    }).then(handleErrors).then(json);
}

export const addBook = async (id, available) => {
    return fetch(booksUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({id, available})
    }).then(handleErrors).then(json);
}

export const deleteBook = async (bookId) => {
    return fetch(booksUrl + '/' + bookId, {
        method: 'DELETE',
        headers,
        body: JSON.stringify({})
    }).then(handleErrors).then(json);
}

export const getMyUser = () => {
    return fetch(userUrl + '/me')
    .then(handleErrors).then(json)
    .then(populateUserBooks);
}

export const getUsers = (page = 0) => {
    return fetch(`${userUrl}?page=${page}`)
    .then(handleErrors).then(json)
    .then(populateUsersBooks);
}

export const getUser = (id) => {
    return fetch(`${userUrl}/${id}`)
    .then(handleErrors).then(json)
    .then(populateUserBooks);
}
