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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      height: 160,
      width: 100
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

const BookCard = ({thumbnail,id,author,title,children}) => {
    const classes = useStyles();
    return (
        <Grid item key={id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={thumbnail}
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography>
                        {author}
                    </Typography>
                </CardContent>
                {children}
                {/* <CardActions>
                    <Button size="small" color="primary">
                        View
                    </Button>
                    <Button size="small" color="primary">
                        Edit
                    </Button>
                </CardActions> */}
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