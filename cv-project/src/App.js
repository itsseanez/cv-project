import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';

import './styles/styles.css';

class App extends Component {
  render() {
    return (

      <div className='body'>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Oswald&display=swap" rel="stylesheet"></link>

        <div className='header'>
          <h1>CV Generator</h1>
        </div>
        <div>
          <GeneralInfo />
          <EducationalExperience />
          <PracticalExperience />
        </div>
      </div>
    );
  }
}

export default App;
