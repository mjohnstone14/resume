import React from 'react';
import ResumeHeader from './components/ResumeHeader.js';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import style from './styles/App.scss';
import './styles/grid.scss';

function App() {
  return (
    <div className={style.body}>
      <section className="wrapper">
        <div className="row">
          <ResumeHeader className="column-1"/>
          <Education className="column-2"/>
          <Experience className="column-3"/>
          <Projects className="column-4"/>
          <Skills className="column-5"/>
        </div>
    
      </section>
 
    </div>
  );
}

export default App;
