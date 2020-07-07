import React, {useEffect} from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Add, Search, Explore,Book,LibraryBooks, SwapCalls,Settings } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import { Badge } from '@material-ui/core';
import { inject,observer } from 'mobx-react';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: theme.breakpoints.width('sm'),
    }
}));

const BottomNavbar = (props) => {
    const [value, setValue] = React.useState('explore');
    const classes = useStyles();
    const location = useLocation();
    useEffect(()=>{setValue(location.pathname.slice(1).split('/')[1])},[]);

    return (
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
          }}
        className={classes.root}
        >
          <BottomNavigationAction component={Link} to="/app/explore" value="explore" label="Explore" icon={<Search />}></BottomNavigationAction>
          <BottomNavigationAction component={Link} to="/app/bookshelf" label="Bookshelf" value="bookshelf" icon={<LibraryBooks />}></BottomNavigationAction>  
          <BottomNavigationAction component={Link} to="/app/requests" label="Requests" value="requests" icon={<Badge badgeContent={props.requestStore.unread} color="error"><SwapCalls /></Badge>}></BottomNavigationAction>
          {/* <BottomNavigationAction component={Link} to="/app/settings" label="Settings" value="settings" icon={<Settings />}></BottomNavigationAction> */}
        </BottomNavigation>
    );
};

export default inject('requestStore')(observer(BottomNavbar));