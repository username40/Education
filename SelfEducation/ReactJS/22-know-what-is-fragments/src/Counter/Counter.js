import React, { Component } from 'react'
import Auxilliary from '../hoc/Auxilliary'

export default class Counter extends Component {
  state = {
    counter: 0
  }

  addCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  // if you want to use React.Fragment you can put it in <>
  // <React.Fragment></React.Fragment>
  // or you can write just <></>
  render() {
    return (
      <>
        <h2 key={0}>Counter {this.state.counter}</h2>
        <button key={1} onClick={this.addCounter}>+</button>
        <button key={2} onClick={() => this.setState({ counter: this.state.counter - 1 })}> - </button>
      </>
    )
  }
}