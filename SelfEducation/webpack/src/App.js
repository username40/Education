import React from 'react'
import $ from 'jquery'

export default class App extends React.Component {
  componentDidMount() {
    $('<h1 />')
      .text('Jquery')
      .css({
        textAlign: 'center',
        color: 'green'
      })
      .appendTo($('header'))
  }
  render() {
    return (
      <React.Fragment>
        <header>Header</header>
        <hr></hr>
        <div className="box">
          <h2 className="box-title">Box title</h2>
          <p className="box-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem cum expedita facere fuga accusamus
      deleniti.</p>
        </div>
      </ React.Fragment>
    )
  }
}