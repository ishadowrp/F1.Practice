import React from 'react';
import logo from '../img/weather_logo.svg';
import '../css/App.css';

import Main from './Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img className='App-logo' src={ logo } height = "50px" width = "50px" alt='Logo'></img>
          <div>Weather Forecast App</div>
      </header>
      <Main />
    </div>
  );
}

export default App;
