import React from 'react';

let url = `https://randomuser.me/api/?results=${1000}`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      // this.state.users = data.results
      this.setState({users: data.results})
    })
    .catch(err => console.log(err))
  }

  com

  render() {
    return (
      <ul>
        {
          this.state.users.length === 0 
            ? <p>loading users for {this.props.myName}</p> 
            : this.state.users.map(person => {
                const { title, first, last } = person.name
                return (
                  <>
                    <li>{title} {first} {last}</li>
                    <img src={person.picture.large}/>
                  </>
                )
              }
            )
        }
      </ul>
    )
  }
}

export default App;
