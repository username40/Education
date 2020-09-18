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
    pageTitle: 'React components',
    showCars: false
  }

  changeTitleHadler = pageTitle => {
    this.setState({ pageTitle })
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }
  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((elem, index) => {
        return (
          <Car
            key={index}
            name={elem.name}
            year={elem.year}
            onChangeTitle={() => this.changeTitleHadler(elem.name)}
          ></Car>
        )
      })
    }
    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.toggleCarsHandler}>toggle</button>
        {cars}
      </div >
    )
  }

}

export default App;
