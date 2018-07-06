import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function Home () {
  return (
    <h1>
      HOME
    </h1>
  )
}

function Topics () {
  return (
    <h1>
      TOPICS
    </h1>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Router>
            <div style={{width: 1000, margin: '0 auto'}}>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/topics'>Topics</Link></li>
              </ul>
              <hr />
              <Route exact path='/' component={Home} />
              <Route path='/topics' component={Topics} />
            </div>
          </Router>
        </p>
      </div>
    );
  }
}

export default App;
