import React, { Component } from 'react'
import './App.scss'
import About from './About/About'
import { Route, NavLink, Switch } from 'react-router-dom'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail'

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName={'active'}>Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeStyle={{ color: 'blue' }}>About</NavLink>
            </li>
            <li>
              <NavLink to={{ pathname: '/cars' }}>Cars</NavLink>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route path="/" exact render={() => <h1>Home page</h1>} />
          <Route path="/about" component={About} />
          <Route path="/cars/:name" component={CarDetail} />
          <Route path="/cars" component={Cars} />
        </Switch>
      </div>
    );
  }
}

export default App
