import React, { Component } from 'react'

export default class Adder extends Component {
    state = {
        value: this.props.value
    }

    handleInput = e => {
        this.setState({ value: e.target.value })
    }

    handleAdd = () => {
        this.props.handleAdd(this.state.value)
        this.setState({value: ''})
    }

    render() {
        return (
        <>
            <input
                type="text"
                value={this.state.value}
                onChange={this.handleInput} 
            />
            <button onClick={this.handleAdd}>Add</button>
        </>
        )
    }
}