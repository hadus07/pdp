import React from 'react'
import Home from './pages/Home'
import Info from './pages/Info'
import News from './pages/News'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import { BrowserRouter, Route } from "react-router-dom"

const styles = {
  bar: { height: '15vh', visibility: 'hidden' },
  footer: { 
    bottom: 0,
    height: '8vh',
    visibility: 'hidden',
    position: 'relative',
  },
}

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Informer</Typography>
          </Toolbar>
        </AppBar>
        <div className={this.props.classes.bar}></div>
        <Route path='/' exact component={Home}></Route>
        <Route path='/info'  component={Info}></Route>
        <Route path='/news'  component={News}></Route>
        <div className={this.props.classes.footer}></div>        
      </BrowserRouter>
    )
  }
}

export default withStyles(styles)(App)
