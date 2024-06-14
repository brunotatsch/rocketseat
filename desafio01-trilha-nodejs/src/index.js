const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next)
{
  const { username } = request.headers;

  const user = users.find((users) => users.username === username);

  if (!user)
  {
    return response.status(400).json({ error: "Username not found!" });
  }

  request.user = user;

  return next();

}

app.post('/users', (request, response) =>
{
  const { name, username } = request.body;

  const usernameAreadyExists = users.some((users) => users.username === username);

  if (usernameAreadyExists)
  {
    return response.status(400).json({ error: "Username already exists!" });
  }

  const user = {
    id: uuidv4(), // precisa ser um uuid
    name: name,
    username: username,
    todos: []
  }
  users.push(user);

  return response.status(201).send(user);

});

app.get('/todos', checksExistsUserAccount, (request, response) =>
{
  const { user } = request;

  return response.status(201).send(user.todos);

});

app.post('/todos', checksExistsUserAccount, (request, response) =>
{
  const { title, deadline } = request.body;
  const { user } = request;

  const todo =
  {
    id: uuidv4(), // precisa ser um uuid
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date()
  };

  user.todos.push(todo);

  return response.status(201).send(todo);

});

app.put('/todos/:id', checksExistsUserAccount, (request, response) =>
{
  const { user } = request;
  const { id } = request.params;
  const { title, deadline } = request.body;


  const todo = user.todos.find((todo) => todo.id === id);

  if (!todo)
  {
    return response.status(404).json({ error: "Todo not found!" });
  }

  Object.assign(todo, { title, deadline });

  return response.status(201).send(todo);

});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) =>
{
  const { user } = request;
  const { id } = request.params; 


  const todo = user.todos.find((todo) => todo.id === id);

  if (!todo)
  {
    return response.status(404).json({ error: "Todo not found!" });
  }

  todo.done = true;

  return response.status(201).send(todo);

});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) =>
{
  const { user } = request;
  const { id } = request.params; 

  const todo = user.todos.find((todo) => todo.id === id);

  if (!todo)
  {
    return response.status(404).json({ error: "Todo not found!" });
  }
  
  user.todos.splice(id,1);

  return response.status(204).send();

});

module.exports = app;