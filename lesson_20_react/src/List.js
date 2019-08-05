import React from 'react'

const List = props => (
    <ul>
      {
        props.todos.map((todo, i) => (
          <li
            key={i}
            style={
              todo.complete 
                ? { textDecoration: 'line-through' } 
                : null
            }
          >
            <input
              type="checkbox"
              checked={todo.complete}
              onClick={() => props.handleCheck(i)}
            />
            {todo.name}
          </li>
        ))
      }
    </ul>
  )

export default List