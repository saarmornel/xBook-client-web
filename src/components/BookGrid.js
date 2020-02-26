import React from 'react';
import { Container, Grid } from "@material-ui/core";
import UserBookCard from './UserBookCard';
import RequestBookCard from './RequestBookCard';
import PrivateBookCard from './PrivateBookCard';
import { observer } from 'mobx-react';

const gridWrap = (Card) => 
    observer((props) => {
        return (
            <Container maxWidth="md">
                <Grid container spacing={4}>
                    {props.books.map(book =>
                    <Grid item key={book.id} xs={12} sm={12} md={12}>
                        <Card {...book} {...props}/>
                    </Grid>
                    )}
                </Grid>
            </Container>
    
        );
})

// export default BookGrid;

const UserBookGrid = gridWrap(UserBookCard);
const BookGrid = gridWrap(PrivateBookCard);
const RequestBookGrid = gridWrap(RequestBookCard);
export {UserBookGrid,BookGrid,RequestBookGrid};

