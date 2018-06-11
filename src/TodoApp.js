import React, { Component } from 'react'
import ShowTodos from './components/ShowTodos'
import AddTodo from './components/AddTodo'
import axios from 'axios'

class TodoApp extends Component {
  state = {
    todoContent: '',
    todoAuthor: '',
    todoIndex: '',
    todoCompleted: false,
    editMode: false,
    todos: []
  }

  async componentDidMount () {
    try {
      this.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  refresh = async () => {
    const response = await axios.get('/todos')
    this.setState({
      todos: response.data.todos
    })
  }

  clearInput = () => {
    this.setState({ 
      todoContent: '',
      todoAuthor: '',
      todoIndex: '',
      todoCompleted: false,
      editMode: false
   })
  }

  addTodo = async () => {
    try {
      const todo = {
        content: this.state.todoContent,
        author: this.state.todoAuthor
      }
      await axios.post(`/todos`, todo)
      this.refresh()
    } catch (error) {
      console.log(error)
    }
    this.clearInput()
  }

  removeTodo = async index => {
    try {
      await axios.delete(`/todos/${index}`)
      this.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  executeTodo = async index => {
    try {
      await axios.patch(`/todos/execute/${index}`)
      this.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  editTodo = (index,todo) => {
    this.setState({
      todoContent: todo.content,
      todoAuthor: todo.author,
      todoCompleted: todo.completed,
      todoIndex: index,
      editMode: true
    })
  }

  updateTodo = async () => {
    try {
      const todo = {
        content: this.state.todoContent,
        author: this.state.todoAuthor,
        completed: this.state.todoCompleted
      }
      await axios.put(`/todos/${this.state.todoIndex}`, todo)
      this.refresh()
      this.clearInput()
    } catch (error) {
      console.log(error)
    }
  }

  handleChangeContent = e => {
    this.setState({
      todoContent: e.target.value
    })
  }

  handleChangeAuthor = e => {
    this.setState({
      todoAuthor: e.target.value
    })
  }

  saveTodo = () => {
    this.state.editMode ? this.updateTodo() : this.addTodo()
  }

  render() {
    return (
      <div>
        <AddTodo
          handleChangeContent={this.handleChangeContent}
          handleChangeAuthor={this.handleChangeAuthor}
          saveTodo={this.saveTodo}
          todoAuthor={this.state.todoAuthor}
          todoContent={this.state.todoContent}
        />
        <ShowTodos todos={this.state.todos} removeTodo={this.removeTodo} executeTodo={this.executeTodo} editTodo={this.editTodo}/>
      </div>
    )
  }
}

export default TodoApp
