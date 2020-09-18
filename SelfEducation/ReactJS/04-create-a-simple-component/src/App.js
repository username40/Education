import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car.js';

class App extends Component {
  render() {
    const divStyle = {
      textAlign: 'center'
    }
    return (
      <div style={divStyle}>
        <h1 style={{ color: 'blue' }}>Hello!!!</h1>
        <Car />
      </div >
    )
  }

}

export default App;
