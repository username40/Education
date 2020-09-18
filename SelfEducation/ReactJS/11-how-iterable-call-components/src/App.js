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

  changeTitleHadler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }
  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  // use .bind it will give your browser more perfomance
  render() {
    const cars = this.state.cars
    const divStyle = {
      textAlign: 'center'
    }
    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <input type="text" onChange={this.handleInput} />
        <button onClick={this.changeTitleHadler.bind(this, 'changed!')}>Change title</button>
        {
          this.state.cars.map((elem, index) => {
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
      </div >
    )
  }

}

export default App;
