import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    counter: 0
  }

  addCounter = () => {
    // you can do that but it's not a good idea
    // this.setState({
    //   counter: this.state.counter + 1
    // })

    // use this way to protect your state from async events
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }

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