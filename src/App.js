import React from 'react';
import About from './component/About'
import logo from './logo.svg';
import './App.css';
import { navigate, Router } from '@reach/router';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <About path="/" />
        </Router>
      </div>
    )
  }
}

export default App;
