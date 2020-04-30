import React, { Fragment } from 'react';
import photo from '../images/me.png';
import '../styles/header.scss';

const ResumeHeader = () => {
    return (
      <Fragment>
          <img alt="Marwan Johnstone" className="avatar" src={photo} />
          <h2 className="title">Marwan Johnstone</h2>
      </Fragment>
      
    )
}

export default ResumeHeader;
