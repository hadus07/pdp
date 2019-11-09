import React from 'react'
import { Home } from './screens/home'
import { Editor } from './screens/editor'
import { Dashboard } from './screens/dashboard'
import { BrowserRouter, Route } from 'react-router-dom'

export const App = props => (
  <BrowserRouter>
    <Route path='/' exact component={Home}/>
    <Route path='/editor' component={Editor}/>
    <Route path='/dashboard' component={Dashboard}/>
  </BrowserRouter>
)