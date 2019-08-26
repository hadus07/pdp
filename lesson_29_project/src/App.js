import React from 'react'
import Home from './pages/Home'
import Info from './pages/Info'
import News from './pages/News'
import { BrowserRouter, Route } from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' exact component={Home}></Route>
        <Route path='/info'  component={Info}></Route>
        <Route path='/news'  component={News}></Route>
      </BrowserRouter>
    )
  }
}

export default App
