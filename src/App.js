import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import AddCounter from './Components/AddCounter';
import RemoveCounter from './Components/RemoveCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='container'>
            <Counter />
            <br />
            <div className='columns'>
              <div className="column is -11">
                <AddCounter />
              </div>
              <div className='column auto'>
                <RemoveCounter />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
