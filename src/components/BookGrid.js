import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import BookCard from './BookCard';
import UserBookCard from './UserBookCard';
import RequestBookCard from './RequestBookCard';
import PrivateBookCard from './PrivateBookCard';

const gridWrap = (Card) => 
    (props) => {
        console.log('gridWrap',props)
        return (
            <Container maxWidth="md">
                <Grid container spacing={4}>
                    {props.books.map(book =>
                        <Card key={book.id} {...book} {...props}/>
                    )}
                </Grid>
            </Container>
    
        );
}

// export default BookGrid;

const UserBookGrid = gridWrap(UserBookCard);
const BookGrid = gridWrap(PrivateBookCard);
const RequestBookGrid = gridWrap(RequestBookCard);
export {UserBookGrid,BookGrid,RequestBookGrid};

