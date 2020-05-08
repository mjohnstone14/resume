import React from 'react';
import '../styles/projects.scss';

const Projects = () => {
    return (
        <div className="projectBody">
            <h2 className="projectTitle">Projects</h2>
            <div className="projectList">
                <li><a href="https://github.com/nick-bigger/MoG-Kiosk">Tacoma Museum of Glass Android Kiosk Application</a></li>
                <li><a href="https://mjohnstone.itch.io/red-blood-cell-shooter">Blood Cell Shooter - Unity Video Game Project</a></li>
                <li><a href="https://mjohnstone.itch.io/mr-bluesky">Mr Blue Sky - 2D Unity Game Project</a></li>
            </div>
      
        </div>
    )
}

export default Projects;