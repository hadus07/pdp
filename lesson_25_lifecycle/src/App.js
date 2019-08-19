import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import { changeCount, clearCount } from './store'
import PageOne from './PageOne'
import PageTwo from './PageTwo'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Page 1</Link>
          </li>
          <li>
            <Link to="/page2">Page 2</Link>
          </li>
        </ul>
        <button onClick={changeCount}>+</button>
        <br/>
        <button onClick={clearCount}>clear</button>
        <Route path="/" exact component={PageOne}/>
        <Route path="/page2" component={PageTwo}/>
      </BrowserRouter>
    );
  }
}

export default App;
