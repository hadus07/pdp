import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Link } from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' exact component={Home}></Route>
      </BrowserRouter>
    )
  }
}

export default App
