import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car.js';

// you can use state only where you extends from react Component
class App extends Component {
  state = {
    cars: [
      { name: 'ford', year: 2010 },
      { name: 'mazda', year: 2015 },
      { name: 'audi', year: 2008 },
    ],
    pageTitle: 'React components'
  }

  render() {
    const cars = this.state.cars
    const divStyle = {
      textAlign: 'center'
    }
    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <Car name={cars[0].name} year={cars[0].year} />
        <Car name={cars[1].name} year={cars[1].year} />
        <Car name={cars[2].name} year={cars[2].year} />

      </div >
    )
  }

}

export default App;
