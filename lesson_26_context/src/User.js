import React from 'react'
import Greet from './Greet'
import MyContext from './MyContext'

class User extends React.Component {


    componentDidMount() {
       this.input.style.border = '2px solid red' 
    }

  render() {
    return (
      <MyContext.Consumer>
        {context => (
            <>
                <input
                    ref={a => this.input = a}
                    type="text"
                    placeholder="Name"
                    onChange={
                        ({ target }) => 
                            context.handleChange(target.value)
                    }
                />
                <Greet />
            </>
        )}
      </MyContext.Consumer>
    )
  }
}

export default User