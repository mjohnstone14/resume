import React from 'react';
import ResumeHeader from './components/ResumeHeader.js';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './Styles/App.css';

function App() {
  const THEME = createMuiTheme({
    typography: {
      "fontFamily": "\"Roboto\",\"Helvetica\",\"Arial\",sans-serif",
      "fontSize": 20,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500
    }
  })
  return (
    <MuiThemeProvider theme={THEME}>
      <div className="App">
        <ResumeHeader className="App-header"/>
        <Education/>
        <Experience/>
        <Projects/>
        <Skills/>
      </div>
    </MuiThemeProvider>
    
  );
}

export default App;
