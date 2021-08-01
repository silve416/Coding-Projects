import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.4)',
    margin: '20px',
  },
  media: {
    height: 440,
  },
  title:{
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#6ECC5E',
  },
  desc:{
    fontFamily: 'Nunito',
    fontSize: '1.1 rem',
    color: '#fff',
  },
  learnMore: {
    //fontFamily: 'Nunito',
    color: '#56994B',
  },
});

export default function ImageCard({ information, checked }) {
  const classes = useStyles();

  return (
      <Collapse in={checked} {...(checked ? {timeout: 2000} : {})} >        
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt="Cheers"
          height="140"
          image={information.imageUrl}
          title="Cheers"
        />
        <CardContent>
          <Typography 
          gutterBottom 
          variant="h5" 
          component="h2" 
          className={classes.title}>
            {information.title}
          </Typography>

          <Typography 
          variant="body2" 
          color="textSecondary" 
          component="p" 
          className={classes.desc}>
            {information.description}
          </Typography>
        </CardContent>

      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className={classes.learnMore}>
          Learn More
        </Button>
      </CardActions>
    </Card>    
    </Collapse>
  );
}