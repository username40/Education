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
        <Car name={'ford'} year={'2010'} />
        <Car name={'mazda'} year={2015} />
        <Car name='audi' year='2008' />
      </div >
    )
  }

}

export default App;
