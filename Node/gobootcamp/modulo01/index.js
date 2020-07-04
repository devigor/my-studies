const express = require('express');

const server = express();
// Indica pro express pegar no body da requisação em formato json
server.use(express.json()); 

const users = ['Igor', 'Laryssa', 'Ítalo'];

// Retorna todos os usuários
server.get('/users', (req, res) => {
  return res.json(users);
});

// Retorna um usuário com ID 
server.get('/users/:index', (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

// Criação de um user
server.post('/users', (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

// Alteração de um user
server.put('/users/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  
  return res.json(users);
});

// Deletando um user
server.delete('/users/:index', (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  
  return res.json(users);
});

server.listen(3000);
