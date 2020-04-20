import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import photo from '../images/me.png';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    avatar: {
      width: theme.spacing(30),
      height: theme.spacing(30),
      borderStyle: 'solid',
      borderColor: 'grey',
      display: 'inline-block',
      position: 'left'
    },
    title: {
      fontSize: '80px',
      borderStyle: 'solid',
      borderRadius: '20px',
      borderColor:  'lightgrey',
      width: '90%'
    }
  }));

export default function ResumeHeader() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Avatar alt="Marwan Johnstone" variant='rounded' className={classes.avatar} src={photo} />
          </Grid>
          <Grid item xs={6}>
            <p className={classes.title}>Marwan Johnstone</p>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid> 
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
        </Grid>
      </div>
    )
}
