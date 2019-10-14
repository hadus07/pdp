import React from 'react'
import { Home } from './screens/home'
import { BrowserRouter, Route } from 'react-router-dom'

export const App = props => (
  <BrowserRouter>
    <Route path='/' component={Home}/>
  </BrowserRouter>
)