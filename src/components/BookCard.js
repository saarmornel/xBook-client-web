import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Hidden,Divider } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const image = {height: 160,width: 100 }

const useStyles = makeStyles(theme => ({
    cardContent: {
      display: 'flex',
      height: image.height,
      flexDirection: 'row-reverse',
      justifyContent: 'space-between'
    },
    
    content: {
      width: '50vw'
    },
  }));

const BookCard = ({thumbnail,id,author,title,header,actions}) => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Grid item key={id} xs={12} sm={12} md={12}>
            <Card>
              {header}
              <Divider></Divider>
              <div className={classes.cardContent}>
                <img src={thumbnail}/>

                <div className={classes.content}>
                  <CardContent>
                    <Typography noWrap component="h5" variant="subtitle1">
                        {title}
                    </Typography>
                    <Typography noWrap variant="subtitle1" color="textSecondary">
                        by {author}
                    </Typography>
                  </CardContent>
            
                  
                </div>

              </div>
              <Divider></Divider>
              {actions}

            </Card>
        </Grid>
    );
};

BookCard.propTypes = {
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
};

export default BookCard;