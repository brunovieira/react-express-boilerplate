import React from 'react'
import Todo from './Todo'

const ShowTodos = props => {
  const { todos, removeTodo, editTodo, executeTodo } = props
  return (
    <table className='ShowTodos'>
      <thead style={{ width: '200px' }}>
        <td style={{ width: '33%' }}>
          Content
        </td>
        <td style={{ width: '33%' }}>
          Author
        </td>
        <td colSpan='3' style={{ width: '33%' }}>
          Actions
        </td>
      </thead>
      {todos.map((todo, i) => (
        <Todo removeTodo={removeTodo} todo={todo} index={i} key={i} executeTodo={executeTodo} editTodo={editTodo} />
      ))}
    </table>
  )
}

export default ShowTodos
