import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import IncomingRequests from '../components/IncomingRequests';
import OutgoingRequests from '../components/OutgoingRequests';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        hidden={value !== index}
        id={index}
        {...other}
      >
        {value === index && children}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
  },
  content: {
    marginTop: 25
  }
}));

const Requests = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <AppBar color="default">
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Incoming" id="incoming" />
                    <Tab label="Outgoing" id="outgoing" />
                </Tabs>
            </AppBar>
            <div className={classes.content}>
              <TabPanel value={value} index={0}>
                  <IncomingRequests/>
              </TabPanel>
              <TabPanel value={value} index={1}>
                  <OutgoingRequests/>
              </TabPanel>
            </div>
      </div>
      );
};

export default Requests;