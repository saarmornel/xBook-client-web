import React, {useEffect} from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Add, Search, Explore,Book,LibraryBooks, SwapCalls,Settings } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: theme.breakpoints.width('sm'),
    }
}));

const BottomNavbar = () => {
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
          <BottomNavigationAction component={Link} to="/app/giveaway" label="Giveaway" value="giveaway" icon={<LibraryBooks />}></BottomNavigationAction>  
          <BottomNavigationAction component={Link} to="/app/requests" label="Requests" value="requests" icon={<SwapCalls />}></BottomNavigationAction>
          {/* <BottomNavigationAction component={Link} to="/app/settings" label="Settings" value="settings" icon={<Settings />}></BottomNavigationAction> */}
        </BottomNavigation>
    );
};

export default BottomNavbar;