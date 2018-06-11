import React from 'react'

const AddTodo = props => {
  const { handleChangeContent, handleChangeAuthor, saveTodo, todoContent, todoAuthor } = props
  return (
    <div className='AddTodo'>
      <input onChange={handleChangeContent} value={todoContent} placeholder='Content' />
      <input onChange={handleChangeAuthor} value={todoAuthor} placeholder='Author' />
      <button onClick={saveTodo}>Add Todo</button>
    </div>
  )
}

export default AddTodo
