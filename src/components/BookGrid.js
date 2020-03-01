import React from 'react';
import { Container, Grid, Box } from "@material-ui/core";
import UserBookCard from './UserBookCard';
import RequestBookCard from './RequestBookCard';
import PrivateBookCard from './PrivateBookCard';
import { observer } from 'mobx-react';

const gridWrap = (Card) => 
    observer((props) => {
        return (
            <Box marginTop={3} marginBottom={3}>
                <Container maxWidth="md">
                    <Grid container spacing={3}>
                        {props.books.map(book =>
                        <Grid item key={book.id} xs={12} sm={12} md={12}>
                            <Card {...book} {...props}/>
                        </Grid>
                        )}
                    </Grid>
                </Container>
            </Box>
        );
})

// export default BookGrid;

const UserBookGrid = gridWrap(UserBookCard);
const BookGrid = gridWrap(PrivateBookCard);
const RequestBookGrid = gridWrap(RequestBookCard);
export {UserBookGrid,BookGrid,RequestBookGrid};

