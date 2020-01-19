import React from 'react';
import BookCard from './BookCard';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { inject,observer } from "mobx-react";
import UserBookCardHeader from "./UserBookCardHeader";
import { CardContent, Typography } from "@material-ui/core";
import { REQUEST_STATUS } from '../services/Request.Status';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from "@material-ui/core/styles";
import { Mail, Phone } from "@material-ui/icons";
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  progress: {
    marginTop: theme.spacing(1),
  }
}))
const RequestBookCard = (props) => {
    const {userId,id,requestStore,status,isIncoming,userMail,userPhone}=props;
    const classes = useStyles();

    const header = <UserBookCardHeader {...props}/>

    const progess =
    status === REQUEST_STATUS.declined && 0 ||
    status === REQUEST_STATUS.pending && 25 ||
    status === REQUEST_STATUS.approved && 50 ||
    status === REQUEST_STATUS.accepted && 100;

    const content = (
    <CardContent key="content">
      <Typography variant="body" color="textSecondary" component="p">
        {status === REQUEST_STATUS.approved && 'You should deliver the book to the requester.'}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Status: {status}
      </Typography>
      <div className={classes.progress}>
        <LinearProgress variant="determinate" value={progess}/>
      </div>
    </CardContent>
    )

    const pendingAction = 
    isIncoming&&(
        <Button
        onClick={()=>onStatusChange(REQUEST_STATUS.approved)}
        size="small" 
        color="primary">
          Accept
        </Button>
   
    );
    //actions to make contact with each other
    const contactAction = (
      <React.Fragment>
        {userPhone && <IconButton color="primary" size="small" href={`tel:${userPhone}`}>
          <Phone />
        </IconButton>
        }
        {userMail && <IconButton color="primary" size="small" href={`mailto:${userMail}`}>
          <Mail />
        </IconButton>
        }
      </React.Fragment>
    );


    const approvedAction =
    [!isIncoming&&(
      <Button
      onClick={()=>onStatusChange(REQUEST_STATUS.accepted)}
      size="small" 
      color="primary">
        I Recieved the Book
      </Button>
    ),contactAction];

    const cancelAction = 
    <Button
    onClick={()=>onStatusChange(REQUEST_STATUS.declined)}
    size="small" 
    color="primary">
      {isIncoming ? 'Reject' : 'Cancel'}
    </Button>

    

    const actions = (status)=> (
      <CardActions key="actions">
        {status === REQUEST_STATUS.pending && pendingAction}
        {status === REQUEST_STATUS.approved && approvedAction}
        {!(status === REQUEST_STATUS.declined) && cancelAction}
      </CardActions>
    );

    const onStatusChange = (status) => {
      requestStore.updateRequestStatus(id,status);
    }


    return (
        <BookCard actions={[content,actions(status)]} header={header} {...props}></BookCard>
    );
};

export default inject('requestStore')(observer(RequestBookCard));