import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    size: {
      width: theme.spacing(30),
      height: theme.spacing(30),
      position: 'relative',
      left: '2%',
      top: '2%'
    }
  }));

export default function ResumeHeader() {
    const classes = useStyles();
    return (
        <header>
            <Avatar alt="Marwan Johnstone" className={classes.size}/>
            Marwan Johnstone
        </header>

    )
}
