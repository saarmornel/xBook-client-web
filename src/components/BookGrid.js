import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import BookCard from './BookCard';
import UserBookCard from './UserBookCard';

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
const BookGrid = gridWrap(BookCard);
export {UserBookGrid,BookGrid};

