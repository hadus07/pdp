import React from 'react'
import User from './User'
import MyProvider from './MyProvider'

class App extends React.Component {
  render() {
    return (
      <MyProvider>
        <User />
      </MyProvider>
    )
  }
}

export default App;
