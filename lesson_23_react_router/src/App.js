import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';

class App extends React.Component {
  state = {
    value: 0
  }

  handleChange = value => {
    this.setState({value})
  }

  render() {
    return (
      <BrowserRouter>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={this.state.value}
          // onChange={(event, value) => this.setState({value})}
        >
          <Link onClick={() => this.handleChange(0)} to="/">
            <Tab label="Page 1"/>
          </Link>
          <Link onClick={() => this.handleChange(1)} to="/page_two/">
            <Tab label="Page 2"/>
          </Link>
          <Link onClick={() => this.handleChange(2)} to="/page_three">
            <Tab label="Page 3"/>
          </Link>
        </Tabs>

        <Route path="/" exact component={PageOne} />
        <Route path="/page_two/" component={PageTwo} />
        <Route path="/page_three/" component={PageThree} />
      </BrowserRouter>
    );
  }
}

class PageOne extends React.Component {

  state = {
    isOpen: false
  }

  render() {
    return (
      <>
        <button onClick={() => this.setState({isOpen: true})}>
          Drawer
        </button>
        <Drawer
          open={this.state.isOpen}
          onClose={() => this.setState({isOpen: false})}
        >
          <p style={{padding: 20}}>Lorem, ipsum dolor.</p>
        </Drawer>
      </>
    )
  }
}

const PageTwo = props => (
  <BrowserRouter>
    <Link to="/page_two/"><p>one</p></Link>
    <Link to="/page_two/two/"><p>two</p></Link>

    <Route path="/page_two/" exact component={() => <h1>One</h1>} />
    <Route path="/page_two/two/" component={() => <h1>Two</h1>} />
  </BrowserRouter>
)
const PageThree = props => (
  <iframe
    src="https://reacttraining.com/react-router/web/guides/quick-start"
    frameBorder={2}
    style={{width: 600, height: 400}}
  ></iframe>
)

export default App;
