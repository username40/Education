import React from 'react'
import './Car.scss'
import { withRouter } from 'react-router-dom'


const Car = props => {
  return (
    <div
      onClick={() => props.history.push('/cars/' + props.name.toLowerCase())}
      className={'Car'}>
      <h3>Сar name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
    </div>
  )
}

export default withRouter(Car)