import React from 'react';
import PropTypes from 'prop-types';
import BookTile from './BookCard';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
}))

const BookGrid = props => {
    const classes = useStyle();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {props.books.map(book => 
                    <BookTile {...book}>{props.children}</BookTile>
                )}
            </Grid>
        </Container>

    );
};

BookGrid.propTypes = {
    books: PropTypes.array
};

export default BookGrid;