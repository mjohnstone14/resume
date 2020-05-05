import React, { useState } from 'react';
import Accordion from './Accordion';
import Card from './Card';
import '../styles/experience.scss';
import content from '../data/resumeContent'
import down from '../images/down.svg'
import up from '../images/up.svg'

const Experience = () => {
    const [activeEventKey, setActiveEventKey] = useState(0);
    return (
        <div className="experience">
        <Accordion activeEventKey={activeEventKey} onToggle={setActiveEventKey}>
            {content.map(({ title, date, bullet, bullet2, bullet3, bullet4, bullet5, bullet6 }, index) => (
                <Card key={index}>
                    <Accordion.Toggle element={Card.Header} eventKey={index}>
                        <h4>{title}<br/><span className="tabDate">{date}</span></h4>
                        {activeEventKey !== index && <img src={down} alt="down"/>}
                        {activeEventKey === index && <img src={up} alt="up"/>}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index} element={Card.Body}>
                        {bullet !== undefined ? <li>{bullet}</li> : null}
                        {bullet2 !== undefined ? <li>{bullet2}</li> : null}
                        {bullet3 !== undefined ? <li>{bullet3}</li> : null}
                        {bullet4 !== undefined ? <li>{bullet4}</li> : null}
                        {bullet5 !== undefined ? <li>{bullet5}</li> : null}
                        {bullet6 !== undefined ? <li>{bullet6}</li> : null}
                    </Accordion.Collapse>
                </Card>
            ))}
        </Accordion>
        </div>
    )
    
}

export default Experience;