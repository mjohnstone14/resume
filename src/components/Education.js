import React from 'react';
import '../styles/education.scss'

const Education = () => {
    return (
        <div className="educationBody">
            <h2 className="edTitle">Education</h2>
            <div>
                <a href="https://www.pugetsound.edu/">
                    <h3 className="edDescriptionLabel">University of Puget Sound</h3>
                </a>      
                <li className="edDescription">August 2015 - May 2019</li>
            </div>
            <div>
                <a href="https://disabroad.org/copenhagen/">
                    <h3 className="edDescriptionLabel">DIS Denmark, Copenhagen</h3>
                </a> 
                <li className="edDescription">August 2017 - May 2018</li>
            </div>     
        </div>
    )
    
}

export default Education;