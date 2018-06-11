import React from 'react'
import Todo from './Todo'

const ShowTodos = props => {
  const { todos, removeTodo, editTodo, executeTodo } = props
  return (
    <ul className='ShowTodos'>
      {todos.map((todo, i) => (
        <Todo removeTodo={removeTodo} todo={todo} index={i} key={i} executeTodo={executeTodo} editTodo={editTodo} />
      ))}
    </ul>
  )
}

export default ShowTodos
