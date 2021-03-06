import React, { Component } from 'react';
import classes from './App.scss';
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

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
      cars
    })
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({ cars })
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
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={event => this.onChangeName(event.target.value, index)}
          ></Car>
        )
      })
    }
    return (
      <div style={divStyle}>
        {/* <h1>{this.state.pageTitle}</h1> */}
        {/* and here you just need write it where you need it and write this.props before */}
        <h1>{this.props.title}</h1>
        <button className={classes.AppButton} onClick={this.toggleCarsHandler}>toggle</button>
        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          {cars}
        </div>
      </div >
    )
  }

}

export default App;
