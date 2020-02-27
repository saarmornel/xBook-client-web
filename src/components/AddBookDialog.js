import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Button,makeStyles,Container } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import BookList from './BookList';
import { searchBook } from '../services/book.service';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchBox from './SearchBox';

const AddBookDialog = ({ handleClose, open }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedId, setSelectedId] = useState();

    const onSearchBook = (bookName) => {
        setSearch(bookName);
        if(bookName.length > 2) {
          setIsLoading(true);
          setTimeout(()=> {
            // search === bookName &&
            searchBook(bookName)
            .then(setResults);
          },3);
        } else {
          setResults([]);
        }
        setIsLoading(false);
      }

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="add-book"
        >
            <DialogTitle id="add-book">{"Add a book to giveaways"}</DialogTitle>
            <DialogContent>
                    <Container>
                        <SearchBox search={search} onSearchBook={onSearchBook}/>
                        { isLoading ? <CircularProgress/>
                            : <BookList books={results} handleBookSelect={setSelectedId}/>}
                    </Container>
                        
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={()=>handleClose()} color="primary">
                    Cancel
                </Button>
                <Button
                 disabled={!selectedId}
                 onClick={()=>handleClose(selectedId)} color="primary" autoFocus>
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddBookDialog;