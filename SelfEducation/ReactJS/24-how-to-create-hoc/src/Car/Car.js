import React from 'react';
import classes from './Car.css'
import withClass from '../hoc/withClass'

class Car extends React.Component {

  render() {
    console.log('Car -> render');
    const inputClasses = [classes.input]

    if (this.props.name !== '') {
      inputClasses.push(classes.green)
    } else {
      inputClasses.push(classes.red)
    }

    if (this.props.name.length > 4) {
      inputClasses.push(classes.bold)
    }

    return (
      <React.Fragment>
        <h2>Car name: {this.props.name}</h2>
        <strong>car year: {this.props.year}</strong>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')} />
        <button onClick={this.props.onDelete}>delete</button>
      </React.Fragment>
    )
  }
}


export default withClass(Car, classes.Car)