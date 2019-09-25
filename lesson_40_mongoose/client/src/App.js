import './App.css'
import React from 'react'
import logo from './logo.svg'
import Registration from './Registration'

class App extends React.Component {
  state = {
    registration: true,
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {this.state.registration ? (
            <Registration />
          ) : null}

        </header>
      </div>
    )
  }
}

export default App
