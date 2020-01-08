import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import BookCard from './BookCard';

const useStyle = makeStyles(theme => ({
    cardGrid: {
        // paddingTop: theme.spacing(1),
        // paddingBottom: theme.spacing(8),
      },
}))

const BookGrid = props => {
    const classes = useStyle();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {props.books.map(book => 
                    <BookCard key={book.id} {...book}>{props.children}</BookCard>
                )}
            </Grid>
        </Container>

    );
};

BookGrid.propTypes = {
    books: PropTypes.array
};

export default BookGrid;