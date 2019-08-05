import React from 'react';
import todos from './assets'
import Adder from './Adder'
import List from './List'

export class App extends React.Component {
  state = {
    todos: todos,
    newTodo: '',
  }

  handleCheck = index => {
    let newTodos = [...this.state.todos]
    newTodos[index].complete = !newTodos[index].complete
    this.setState({todos: newTodos})
  }

  handleAdd = value => {
    this.setState({newTodo: value}, () => {
      if(this.state.newTodo !== '') {

        let newTodos = [
          ...this.state.todos,
          { name: this.state.newTodo, complete: false },
        ]
    
        this.setState({todos: newTodos})
      }
    })
  }

  render() {
    return (
      <>
        <Adder
          value={this.state.newTodo}
          handleAdd={value => this.handleAdd(value)}
        />
        <List
          todos={this.state.todos}
          handleCheck={index => this.handleCheck(index)}
        />
      </>
    )
  }  
}
