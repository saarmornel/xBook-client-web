import React from 'react';
import BookCard from './BookCard';
import { observer,inject } from "mobx-react";
import DeleteIcon from '@material-ui/icons/Delete';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyle = makeStyles((theme)=>({
  actions: {
    flexDirection: "column",
    alignItems: 'flex-start',
    
  },
  availableAction: {
    width: '95%',
    justifyContent: 'space-between',
  },
  formControl: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(2),
    minWidth: 120,
  },
}))


const PrivateBookCard = (props) => {
    const classes = useStyle();
    const handleChange = event => {
      props.bookStore.updateBook(props.id,event.target.value)
    };

    const actions =
    <CardActions key="actions" className={classes.actions}>
      <FormControl className={classes.formControl}>
        <Select
          labelId="privacy-label"
          id="privacy"
          value={props.available}
          onChange={handleChange}
        >
          <MenuItem value={true}>Public</MenuItem>
          <MenuItem value={false}>Private</MenuItem>
        </Select>
      </FormControl>

        <Button
        onClick={()=>props.bookStore.deleteBook(props.id)}
        startIcon={<DeleteIcon />}
        size="small"
        >
        Delete
      </Button>
    </CardActions>

    return (
            <BookCard actions={actions} {...props}/>
    );
};

export default inject('bookStore')(observer(PrivateBookCard));