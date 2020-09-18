import React from 'react';

const car = () => (
  <div>
    <h2>This is Car component from arrow function!</h2>
    <strong>1 + 1</strong>
    <br />
    <strong>{1 + 1}</strong>
    <br />
    <strong>{Math.round(Math.random() * 100)}</strong>
  </div>
)

export default car