import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import photo from '../images/me.png';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import style from '../Styles/header.scss';



export default function ResumeHeader() {

    return (
      <div>
        <img className="avatar" src={photo} />
        <h2 className="title">Marwan Johnstone</h2>
      </div>
    )
}
