import React, { Component } from 'react'
import './App.scss'
import About from './About/About'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail'

class App extends Component {
  state = {
    isLoggedIn: false
  }
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
        <div>
          <h3>Is logged in {this.state.isLoggedIn ? 'TRUE' : 'FALSE'}</h3>
          <button onClick={() => this.setState({ isLoggedIn: true })}>Login</button>
        </div>
        <hr />
        <Switch>
          <Route path="/" exact render={() => <h1>Home page</h1>} />
          {this.state.isLoggedIn ? <Route path="/about" component={About} /> : null}

          <Route path="/cars/:name" component={CarDetail} />
          <Route path="/cars" component={Cars} />
          {/*
          <Route 
            render={() => <h1 style={{ color: 'red' }}>404 not found</h1>}
          />*/}
          <Redirect to={'/'} />
        </Switch>
      </div >
    );
  }
}

export default App
