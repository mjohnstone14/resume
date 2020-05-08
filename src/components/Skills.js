import React from 'react'
import '../styles/skills.scss';
const Skills = () => {
    return (
        <div className="skillsBody">
            <h2 className="skillsTitle">Skills</h2>
            <div className="skillsSubtitle">
                <h3>Languages</h3>
                <div className="skillsList">
                    <li>English - Native</li>
                    <li>Arabic - Native</li>
                    <li>Danish - Beginner</li>
                </div>

                <h3>Frameworks and Tools</h3>
                <div className="skillsList">
                    <li>AWS</li>
                    <li>GitLab, GitHub</li>
                    <li>Swagger UI</li>
                    <li>SpringBoot</li>
                    <li>Jest</li>
                    <li>Kubernetes</li>
                    <li>Maven/Gradle</li>
                    <li>Kafka Streams</li>
                    <li>Unity</li>
                    <li>Docker</li>
                </div>
                <h3>Programming Languages</h3>
                <div className="skillsList">
                    <li>JavaScript</li>
                    <li>React</li>  
                    <li>Angular</li>
                    <li>Node.js</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>C#</li>
                    <li>Sass</li>
                    <li>SQL</li>
                </div>  
            </div>
        </div>
    )
}

export default Skills;