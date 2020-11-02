import React from 'react';
import classes from './Car.css'
import withClass from '../hoc/withClass'
import PropTypes from 'prop-types'

class Car extends React.Component {

  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  componentDidMount() {
    if (this.props.index === 1) {
      this.inputRef.current.focus()
    }

  }

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
          ref={this.inputRef}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')} />
        <button onClick={this.props.onDelete}>delete</button>
      </React.Fragment>
    )
  }
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func,
}


export default withClass(Car, classes.Car);