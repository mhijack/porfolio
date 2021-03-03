import React, { Component } from 'react';

import Navbar from './components/Nav/Navbar';
import Description from './components/Description/Description';
import Zen from './components/Zen/Zen';
import ZenTitle from './components/ZenTitle/ZenTitle';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Description />
        <ZenTitle />
        <Zen />
      </div>
    );
  }
}

export default App;
