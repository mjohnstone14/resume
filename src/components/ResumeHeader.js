import React, { Fragment } from 'react';
import photo from '../images/me.png';
import '../styles/header.scss';
import linkedIn from '../images/linkedin-tile.svg';
import github from '../images/github.svg';
const ResumeHeader = () => {
    return (
      <Fragment>
        
            <img alt="Marwan Johnstone" className="avatar" src={photo} />
            <h2 className="title">Marwan Johnstone</h2>
            <div className="iconPadding">
                <a href="https://www.linkedin.com/in/mjohnstone14/"><img src={linkedIn} alt="linkedin" className="icon"/></a>
                <a href="https://github.com/mjohnstone14"><img src={github} alt="github" className="icon"/></a>
            </div>     
      </Fragment>
      
    )
}

export default ResumeHeader;
