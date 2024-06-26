// importa o framework express
const { request, response } = require('express');
const express = require('express');

// Importa uiid para criação randomica de ID
const { v4: uuidv4 } = require("uuid")

// inicializa o framework
const app = express();

// Libera o uso de jSON pela aplicação
app.use(express.json());

// Constantes / Variaveis / Arrays
const customers = [];

// Middleware
function verifyIfExistsAccountCPF(request, response, next) {
  
  const { cpf } = request.headers;

  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return response.status(400).json({ error: "Customer not found!"});
  }

  request.customer = customer;

  return next();

}

function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if(operation.type === 'credit') {
      return acc + operation.amount;
    } else {
      return acc - operation.amount;
    }

    
  },0);

  return balance;

};

app.get("/helloWord",(request,response) => {
  
  return response.json({ message : "Hello Word Ignite - FinAPI !!!"}) 

} );

app.post("/account", (request,response) => {
  const {cpf , name} = request.body;

  const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf) ;
  
  if (customerAlreadyExists) {
    return response.status(400).json({ error: "Customer already exists!"});
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: [],
  })

  return response.status(201).send();
});

// Usando o use voce define para todas as rotas a seguir o middleware 
// app.use(verifyIfExistsAccountCPF);

app.get("/statement/", verifyIfExistsAccountCPF, (request,response) => {
  const { cpf } = request.headers;

  const customer = customers.find(customer => customer.cpf === cpf);

  return response.json(customer.statement);

});

app.post("/deposit", verifyIfExistsAccountCPF, (request,response) => {
  
  const { description, amount} = request.body;

  const { customer } = request;

  const statementOperation = {
    description, 
    amount,
    create_at: new Date(),
    type: "credit"
  }

  customer.statement.push(statementOperation);

  return response.status(201).send();

})
 
app.post("/withdraw", verifyIfExistsAccountCPF, (request, response) => {
  const  { amount } = request.body;
  const { customer } = request;
 
  const balance = getBalance(customer.statement);

  if (balance < amount) {
    return response.status(400).json({error: "Insufficient funds!"});
  };

  const statementOperation = {
    amount,
    create_at: new Date(),
    type: "debit"
  };

  customer.statement.push(statementOperation);

  return response.status(201).send();

})

app.get("/statement/date", verifyIfExistsAccountCPF, (request,response) => {
  const { customer } = request;
  const { date } = request.query;

  const dataFormat = new Date(date + " 00:00");

  const statement = customer.statement.filter(
    (statement) => 
      statement.create_at.toDateString() === 
      new Date(dataFormat).toDateString()
    );
  
  return response.json(statement);

});

app.put("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { name } = request.body;
  const { customer } = request;

  customer.name = name;

  return response.status(201).send();

})

app.delete("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;

 customers.splice(customers,1);

 return response.status(200).json(customers);

})

app.get("/balance", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;

  const balance = getBalance(customer.statement);

  return response.json(balance);

})
app.listen(3333);