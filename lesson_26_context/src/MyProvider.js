import React from 'react'
import MyContext from './MyContext'

class MyProvider extends React.Component {

    state = { name: '' }

    handleChange = name => this.setState({name})

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                handleChange: this.handleChange,
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider