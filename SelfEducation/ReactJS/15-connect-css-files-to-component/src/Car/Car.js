import React from 'react';
import './Car.css'

export default props => (
  <div className='Car'>
    <h2>Car name: {props.name}</h2>
    <strong>car year: {props.year}</strong>
    <input onChange={props.onChangeName} value={props.name} />
    <button onClick={props.onDelete}>delete</button>
  </div>
)