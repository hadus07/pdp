import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    status: 'registration'
  }

  componentDidMount() {
    if(window.localStorage.getItem('id')) {
      this.setState({status: 'logged'})
    }
  }

  render() {
    if(this.state.status === 'registration') {
      return <Registration onSuccess={() => this.setState({status: 'logged'})}/>
    } else if (this.state.status === 'logged') {
      return <Main onLogout={() => this.setState({status: 'registration'})}/>
    }
  }
}

const Main = props => (
  <Cont>
    <button
      onClick={() => {
        window.localStorage.removeItem('id')
        props.onLogout()
      }}
    >
      Log out
    </button>
  </Cont>
)

class Registration extends React.Component {
  state = {
    username: '',
    password: '',
    password_2: '',
  }

  handleChange = (name, value) => this.setState({[name]: value})

  handleSubmit = async () => {
    if(Object.keys(this.state).some(item => this.state[item] === '')) {
      alert('No empty fields')
    } else if(this.state.password !== this.state.password_2) {
      alert('Passwords do not match')
    } else {
      try {
        let res = await fetch(
          'http://localhost:3030',
          {
            method: 'POST',
            body: JSON.stringify(this.state),
          },
        )
        res = await res.json()
        if(res.status === 'success') {
          Object.keys(this.state).map(item => this.setState({[item]: ''}))
          alert(res.message)
          window.localStorage.setItem('id', res.id)
          this.props.onSuccess()
        }else if(res.status === 'fail') {
          alert(res.message)
        }
        console.log(res)
      } catch(err) {
        console.log(err)
      }
    }
  }

  render() {
    return (
      <Cont>
        <h1>Registration</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={({target}) => this.handleChange(target.name, target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={({target}) => this.handleChange(target.name, target.value)}
        />
        <input
          type="password"
          name="password_2"
          value={this.state.password_2}
          placeholder="Confirm Password"
          onChange={({target}) => this.handleChange(target.name, target.value)}
        />
        <button onClick={this.handleSubmit}>Sign up</button>
      </Cont>
    );
  }
}

const Cont = props => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {props.children}
    </header>
  </div>
)

export default App;
