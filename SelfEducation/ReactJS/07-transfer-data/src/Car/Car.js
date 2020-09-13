import React from 'react';

// you can use priops.children for rendering some html inside your component
export default props => (
  <div>
    <h2>Car name: {props.name}</h2>
    <strong>car year: {props.year}</strong>
    {props.children}
  </div>
)