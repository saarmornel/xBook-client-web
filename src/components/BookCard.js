import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Hidden,Divider } from '@material-ui/core';


const image = {height: 160,width: 100 }

const useStyles = makeStyles(theme => ({
    cardContent: {
      display: 'flex',
      height: image.height,
      flexDirection: 'row-reverse',
      justifyContent: 'space-between'
    },
    
    content: {
      width: '45vw',
      overflow: 'hidden'
    },
  }));

const BookCard = ({data,header,actions}) => {
    const {thumbnail,author,title,more} = data;
    const classes = useStyles();
    return (
            <Card>
              {header}
              <Divider />
              <div className={classes.cardContent}>
                <img src={thumbnail}/>

                <div className={classes.content}>
                  <CardContent>
                    <Typography component="h5" variant="subtitle1">
                        <Link href={more} target="_blank" rel="noopener">
                          {title}
                        </Link>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        by {author}
                    </Typography>
                  </CardContent>
            
                  
                </div>

              </div>
              <Divider></Divider>
              {actions}

            </Card>
    );
};

BookCard.propTypes = {
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
};

export default BookCard;