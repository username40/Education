import React from 'react';

export default props => (
  <div style={{
    border: '1px solid #ccc',
    marginBottom: '10px',
    display: 'block',
    padding: '10px'
  }}>
    <h2>Car name: {props.name}</h2>
    <strong>car year: {props.year}</strong>
    <input onChange={props.onChangeName} value={props.name} />
    <button onClick={props.onDelete}>delete</button>
  </div>
)