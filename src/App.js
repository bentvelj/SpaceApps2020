import React from 'react';
import About from './component/About'
import Search from './component/Search'
import WhatsHot from './component/WhatsHot'
import NearYou from './component/NearYou'

import './App.css';
import { Router } from '@reach/router';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <About path="/" />
          <Search path="/search" />
          <WhatsHot path="/whatshot" />
          <NearYou path="/nearyou" />
        </Router>
      </div>
    )
  }
}

export default App;
