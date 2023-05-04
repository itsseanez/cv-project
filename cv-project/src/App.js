import React, { Component } from 'react';
import generalInfo from './components/generalInfo';

class App extends Component {
  render() {
    return (
      <div>hi
        {generalInfo}
      </div>
    );
  }
}

export default App;
