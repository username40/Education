import React, { Component } from 'react'
import './App.scss'
import About from './About/About'
import { Route } from 'react-router-dom'
import Cars from './Cars/Cars'

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/cars">Cars</a>
            </li>
          </ul>
        </nav>
        <hr />
        <Route
          path="/"
          exact
          render={() => <h1>Home page</h1>}
        />
        <Route
          path="/about"
          component={About}
        />
        <Route
          path="/cars"
          component={Cars}
        />
      </div>
    );
  }
}

export default App
