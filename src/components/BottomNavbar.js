import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Add } from '@material-ui/icons';

const BottomNavbar = () => {
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
          }}
        showLabels
        >
          <BottomNavigationAction label="Add Book" icon={<Add />}></BottomNavigationAction>
        </BottomNavigation>
    );
};

export default BottomNavbar;