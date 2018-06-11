import React from 'react'
// import PropTypes from 'prop-types'

const Todo = props => {
  const { todo, index, removeTodo, editTodo, executeTodo } = props
  return (
    <tr key={index}>
      <td>
        {todo.content}
      </td>
      <td>
        {todo.author}
      </td>
      <td>
        <button onClick={() => removeTodo(index)}>Remove Todo</button>
      </td>
      <td>
        <button onClick={() => editTodo(index, todo)}>Edit Todo</button>
      </td>
      <td>
        <button onClick={() => executeTodo(index)}>{todo.completed ? 'N' : 'Y'}</button>
      </td>
    </tr>
  )
}

// Todo.propTypes = {
//   todo: PropTypes.string.isRequired
// }

export default Todo
