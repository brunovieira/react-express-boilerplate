const express = require('express')
const PORT = 8080

const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const app = express()

const todos = [{
  content: 'Walk the dog',
  author: 'me',
  completed: false
}]

app.get('/todos', (req, res) => {
  res.status(200).json({ todos })
})

app.post('/todos', jsonParser, (req, res) => {
  const todo = req.body
  todos.push(todo)
  res.status(201).json({ todos })
})

app.put('/todos/:index', jsonParser, (req, res) => {
  const { index } = req.params
  const todo = todos[index]
  const newTodo = req.body

  if (todo) {
    todos[index] = newTodo
    res.status(200).json({ todo: todos[index] })
  } else {
    res.status(404).json({
      message: 'The todo does not exist.'
    })
  }
})

app.patch('/todos/execute/:index', (req, res) => {
  const { index } = req.params
  let todo = todos[index]

  if (todo) {
    todo.completed = !todo.completed
    todos[index] = todo
    res.status(200).json({ todo: todos[index] })
  } else {
    res.status(404).json({
      message: 'The todo does not exist.'
    })
  }
})

app.delete('/todos/:index', (req, res) => {
  const index = req.params.index
  const todo = todos.splice(index, 1)

  if (todo.length) {
    res.status(200).json({ todo: todo[0] })
  }

  res.status(404).json({
    message: 'The todo does not exist.'
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
})
