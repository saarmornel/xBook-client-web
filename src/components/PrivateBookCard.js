import React from 'react';
import BookCard from './BookCard';
import { observer,inject } from "mobx-react";
import DeleteIcon from '@material-ui/icons/Delete';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme)=>({
  actions: {
    flexDirection: "column",
    alignItems: 'flex-start',
  },
  availableAction: {
    width: '95%',
    justifyContent: 'space-between',
  }
}))


const PrivateBookCard = (props) => {
    const classes = useStyle();
    const handleChange = event => {
      props.bookStore.updateBook(props.id,event.target.checked)
    };

    const actions =
    <CardActions key="actions" className={classes.actions}>

          <FormControlLabel className={classes.availableAction}
          control={
            <Switch
              checked={props.available}
              onChange={handleChange}
              value="available"
              color="primary"
            />
          }
          labelPlacement="start"
          label="Available"
          />


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