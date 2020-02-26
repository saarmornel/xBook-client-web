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
import Divider from '@material-ui/core/Divider';
import SvgIcon from '@material-ui/core/SvgIcon';

const FacebookMessenger = (props) => (
  <SvgIcon {...props}>
    <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z"/>
  </SvgIcon>
)

const useStyles = makeStyles(theme => ({
  actions: {
    flexFlow: 'wrap'
  },
  progress: {
    marginTop: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(1,0,1,0)
  },
  icon: {
    padding: theme.spacing(0,1)
  },
  contactAction: {
    width: '100%',
    padding: theme.spacing(0,1,2)
  }
}))
const RequestBookCard = (props) => {
    const {id,requestStore,status,isIncoming,user}=props;
    const classes = useStyles();

    const header = <UserBookCardHeader {...props}/>

    const progess =
    status === REQUEST_STATUS.declined && 1 ||
    status === REQUEST_STATUS.pending && 25 ||
    status === REQUEST_STATUS.approved && 50 ||
    status === REQUEST_STATUS.accepted && 100;

    const content = (
    <CardContent key="content">
      <Typography variant="body1" color="textSecondary" component="p">
        {status === REQUEST_STATUS.approved && isIncoming && 'You should deliver the book to the requester.'}
        {status === REQUEST_STATUS.approved && !isIncoming && 'You should contact to receive the book.'}
      </Typography>
      {status === REQUEST_STATUS.approved && <Divider variant="middle" className={classes.divider} />}
      <Typography variant="body2" color="textSecondary" component="p">
        Status: {status}
      </Typography>
      <div className={classes.progress}>
        <LinearProgress variant="determinate" value={progess}/>
      </div>
    </CardContent>
    )

    const pendingAction = 
        <Button
        onClick={()=>onStatusChange(REQUEST_STATUS.approved)}
        size="small" 
        color="primary">
          Accept
        </Button>
        
    //actions to make contact with each other
    const contactAction = (
      <div className={classes.contactAction}>
        {user.phone && <IconButton className={classes.icon} color="primary" size="small" href={`tel:${user.phone}`}>
          <Phone />
        </IconButton>
        }
        {user.email && <IconButton className={classes.icon} color="primary" size="small" href={`mailto:${user.email}`}>
          <Mail />
        </IconButton>
        }
        {/* {user.email && <IconButton className={classes.icon} color="primary" size="small" href={`http://m.me/${user.email}`}>
          <FacebookMessenger />
        </IconButton>
        } */}
      </div>
    );


    const approvedAction =
      <Button
      onClick={()=>onStatusChange(REQUEST_STATUS.accepted)}
      size="small" 
      color="primary">
        I received the Book
      </Button>


    const cancelAction = 
    <Button
    onClick={()=>onStatusChange(REQUEST_STATUS.declined)}
    size="small" 
    color="primary">
      {isIncoming ? 'Reject' : 'Cancel'}
    </Button>

    

    const actions = (status)=> (
      <CardActions key="actions" className={classes.actions}>
        {status === REQUEST_STATUS.approved && contactAction}
        {status === REQUEST_STATUS.pending && isIncoming && pendingAction}
        {status === REQUEST_STATUS.approved && !isIncoming && approvedAction}
        {!(status === REQUEST_STATUS.declined || status === REQUEST_STATUS.accepted) && cancelAction}
      </CardActions>
    );

    const onStatusChange = (status) => {
      requestStore.updateRequestStatus(id,status,isIncoming);
    }


    return (
        <BookCard actions={[content,actions(status)]} header={header} {...props}></BookCard>
    );
};

export default inject('requestStore')(observer(RequestBookCard));