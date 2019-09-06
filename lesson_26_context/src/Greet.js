import React from 'react'
import MyContext from './MyContext'

class Greet extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <p>Hello {context.state.name}</p>
        )}
      </MyContext.Consumer>
    )
  }
}

export default Greet