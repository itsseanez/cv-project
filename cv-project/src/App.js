import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';

class App extends Component {
  render() {
    return (
      <div>
        <GeneralInfo />
        <EducationalExperience />
        <PracticalExperience />
      </div>
    );
  }
}

export default App;
