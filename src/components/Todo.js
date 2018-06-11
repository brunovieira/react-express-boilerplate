import React from 'react'
// import PropTypes from 'prop-types'

const Todo = props => {
  const { todo, index, removeTodo, editTodo, executeTodo } = props
  return (
    <li key={index}>
      {todo.content} - {todo.author}
      <button onClick={() => removeTodo(index)}>Remove Todo</button>
      <button onClick={() => editTodo(index, todo)}>Edit Todo</button>
      <button onClick={() => executeTodo(index)}>{todo.completed ? 'N' : 'Y'}</button>
    </li>
  )
}

// Todo.propTypes = {
//   todo: PropTypes.string.isRequired
// }

export default Todo
