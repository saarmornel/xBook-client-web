import { book1,book2,book3,book4,book5,book6 } from './books';

export const users = {
    '077777777': {
        books: [{id : book1 ,available: true}, {id : book2 ,available: false }, {id : book3 ,available: false},{id : book4 ,available: true}],
        given: 1,
        received: 5
    },
    '075651532': {
        books: [{id : book1 ,available: true}, {id : book2 ,available: false }, {id : book3 ,available: false},{id : book4 ,available: false},{id : book5 ,available: false}],
        given: 2,
        received: 3
    },
    '058546453': {
        books: [{id : book1 ,available: true}, {id : book2 ,available: false }, {id : book3 ,available: false}],
        given: 2,
        received: 3

    }
}

export const currentUser = '075651532'