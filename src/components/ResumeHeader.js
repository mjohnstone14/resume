import React from 'react';
import photo from '../images/me.png';
import '../styles/header.scss';

const ResumeHeader = () => {
    return (
      <div>
        <img className="avatar" src={photo} />
        <h2 className="title">Marwan Johnstone</h2>
      </div>
    )
}

export default ResumeHeader;
