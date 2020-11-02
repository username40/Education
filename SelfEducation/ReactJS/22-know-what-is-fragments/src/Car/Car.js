import React from 'react';
// import Radium from 'radium';
import classes from './Car.css'


class Car extends React.Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log('Car -> componentWillReceiveProps', nextProps);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Car -> shouldComponentUpdate', nextProps, nextState);
    return nextProps.name.trim() !== this.props.name.trim()
  }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('Car -> componentWillUpdate', nextProps, nextState);
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(' Car -> getDerivedStateFromProps', nextProps, prevState);

  //   return prevState
  // }

  getSnapshotBeforeUpdate() {
    console.log('Car -> getSnapshotBeforeUpdate');
  }

  componentDidUpdate() {
    console.log('Car -> componentDidUpdate');
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

    const style = {
      border: '1px solid #ccc',
      boxShadow: '0 4px 5px 0 rgba(0,0,0,0.14)',
      ':hover': {
        border: '1px solid #aaa',
        boxShadow: '0 4px 15px 0 rgba(0,0,0, 0.25)',
        cursor: 'pointer'
      }
    }
    return (
      <div className={classes.Car} style={style}>
        <h2>Car name: {this.props.name}</h2>
        <strong>car year: {this.props.year}</strong>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')} />
        <button onClick={this.props.onDelete}>delete</button>
      </div>
    )
  }
}


export default Car