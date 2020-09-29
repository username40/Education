import React from 'react';
import './Car.css'

export default props => {
  const inputClasses = ['input']

  if (props.name !== '') {
    inputClasses.push('green')
  } else {
    inputClasses.push('red')
  }

  if (props.name.length > 4) {
    inputClasses.push('bold')
  }
  return (
    <div className='Car'>
      <h2>Car name: {props.name}</h2>
      <strong>car year: {props.year}</strong>
      <input
        type="text"
        onChange={props.onChangeName}
        value={props.name}
        className={inputClasses.join(' ')} />
      <button onClick={props.onDelete}>delete</button>
    </div>
  )
}