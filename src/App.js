import React from 'react';
import ResumeHeader from './components/ResumeHeader.js';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './styles/App.scss';

function App() {

  return (
  
    <div className="App">
      <ResumeHeader className="App-header"/>
      <Education/>
      <Experience/>
      <Projects/>
      <Skills/>
    </div>

    
  );
}

export default App;
