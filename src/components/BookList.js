import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function BookList({ books, handleBookSelect }) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState();

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
    handleBookSelect(books[index].id);
  };

  const _renderBook = (book, i, booksArr) => {
    const item = 
    <BookListItem 
    selected={selectedIndex === i}
    onClick={() => handleListItemClick(i)}
    key={book.id} 
    {...book} />;
    const divider = (i+1) !== booksArr.length &&
        <Divider key={i} variant="inset" component="li" />;
    return divider ? [item,divider] : item;
  }

  return (
    <List key="book-list" className={classes.root}>
      {
        books.map(_renderBook)
      }
    </List>
  );

}

BookList.propTypes = {
  books: PropTypes.array
};


const BookListItem = ({ author, title, thumbnail,...rest }) => {
  return (
    <ListItem alignItems="flex-start" disableGutters {...rest}>
      <ListItemAvatar>
        <Avatar alt={title} src={thumbnail} />
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={author}
      />
    </ListItem>
  );
};