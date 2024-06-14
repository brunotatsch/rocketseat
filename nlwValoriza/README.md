# Projeto

nlwValoriza

# Descrição do Projeto
nlwValoriza - Next Level Week 6 (Together)

# Sobre

Projeto foi desenvolvido durante o NLW Together, foi um grande passo para mim poder participar e conhecer novas tecnologias. Se tiver duvidas sobre o projeto pode enviar entrar em contato, meus contatos estão na sessão Sobre mim.

# Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#Sobre)
   * [Tabela de Conteudo](#tabela-de-conteudo)
   * [Como usar](#como-usar)
      * [Login](##Login) 
      * [List Users](##List-Users) 
      * [List Tags](##List-Tags) 
      * [List Compliments by Sender](##List-Compliments-by-Sender) 
      * [List Compliments by Receiver](##List-Compliments-by-Receiver) 
      * [Create User](##Create-User) 
      * [Create Tag](##Create-Tag) 
      * [Create Compliments](##Create-Compliments) 
   * [Testes](#testes)
   * [Features](#Features)
   * [Regras](#Regras)
   * [Sobre mim](#Sobre-mim)

<!--te-->



# Como usar 

Use `git clone` para copiar o projeto depois abra a pasta do projeto e rode o comando `yarn` para instalar os pacotes, após esta execução rodar o `yarn dev`


# testes

## Login
```
URL : http://localhost:3000/login
METODO: POST
RETORNO: (TOKEN)
```

### EXEMPLO JSON
```
{
	"email": "nlwvaloriza@outlook.com",
	"password": "123456"
}
``` 
### EXEMPLO DO RETORNO
```
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5sd3ZhbG9yaXphQG91dGxvb2suY29tIiwiaWF0IjoxNjI0NzUzODM5LCJleHAiOjE2MjQ4NDAyMzksInN1YiI6IjNhNjU5YzU5LTcwYjktNDNmZi1iODhjLTlmOWJlZTkwMzRhMSJ9.gbuJ66f3UOsqal3BL-hK9XnAN6DgnXlOJXnkNW19p7w"
```

## List Users
```
URL : http://localhost:3000/users
METODO: GET
RETORNO: JSON
AUTH: Bearer
TOKEN: Retorno da API LOGIN
```
### EXEMPLO DO RETORNO
```
[
  {
    "id": "3a659c59-70b9-43ff-b88c-9f9bee9034a1",
    "name": "nlwValoriza",
    "email": "nlwvaloriza@outlook.com",
    "admin": true,
    "created_at": "2021-06-27T00:26:01.000Z",
    "updated_at": "2021-06-27T00:26:01.000Z"
  },
  {
    "id": "d8679258-a9d3-46f8-929a-191d83dd0170",
    "name": "nlwValoriza no Admin",
    "email": "nlwvaloriza2@outlook.com",
    "admin": false,
    "created_at": "2021-06-27T00:29:53.000Z",
    "updated_at": "2021-06-27T00:29:53.000Z"
  }
]
```
## List Tags
```
URL : http://localhost:3000/tags
METODO: GET
RETORNO: JSON
AUTH: Bearer
TOKEN: Retorno da API LOGIN
```
### EXEMPLO DO RETORNO
```
[
  {
    "id": "098c5ec8-380c-4925-b4b6-5c4578edfc1e",
    "name": "Ajudante master",
    "created_at": "2021-06-27T00:30:51.000Z",
    "updated_at": "2021-06-27T00:30:51.000Z",
    "name_custom": "#Ajudante master"
  }
]
```

## List Compliments by Sender
```
Retorna todos os elogios enviados

URL : http://localhost:3000/users/compliment/send
METODO: GET
RETORNO: JSON
AUTH: Bearer
TOKEN: Retorno da API LOGIN
```
### EXEMPLO DO RETORNO
```
  {
    "id": "e06b6b6b-6f95-4943-978e-f7d9a8a94f00",
    "user_sender_id": "aa7c1a55-b20c-466d-887a-bd5bc2e078fd",
    "user_receiver_id": "17abef24-50cb-4fa0-b22e-4261c9f67a62",
    "tag_id": "0fdb71e1-9130-4400-9c4e-d091724709e7",
    "message": "Muito bem",
    "created_at": "2021-06-24T00:51:04.000Z",
    "user_sender": {
      "id": "aa7c1a55-b20c-466d-887a-bd5bc2e078fd",
      "name": "Lider",
      "email": "lider@123.com.br",
      "admin": true,
      "password": "$2a$08$s.Lh6o2gBj5twa87IqZvluHUPhH5vmnEro/uXqTsefgh0bmL42mm6",
      "created_at": "2021-06-23T23:36:08.000Z",
      "updated_at": "2021-06-23T23:36:08.000Z"
    },
    "user_receiver": {
      "id": "17abef24-50cb-4fa0-b22e-4261c9f67a62",
      "name": "Funcionario",
      "email": "func@123.com.br",
      "admin": false,
      "password": "$2a$08$ctEoXCkSNVbOe7YTar4GxOMhVL2mYIGD/FMftQTzv9AyrhhfFMQEK",
      "created_at": "2021-06-24T00:49:34.000Z",
      "updated_at": "2021-06-24T00:49:34.000Z"
    },
    "tag": {
      "id": "0fdb71e1-9130-4400-9c4e-d091724709e7",
      "name": "Liderança",
      "created_at": "2021-06-23T00:43:18.000Z",
      "updated_at": "2021-06-23T00:43:18.000Z"
    }
  }
```
## List Compliments by Receiver
```
Retorna todos os elogios recebidos

URL : http://localhost:3000/users/compliment/receive
METODO: GET
RETORNO: JSON
AUTH: Bearer
TOKEN: Retorno da API LOGIN
```
### EXEMPLO DO RETORNO
```
 [
  {
    "id": "df395aa2-f50c-42cc-b466-1223d11245e3",
    "user_sender_id": "d8679258-a9d3-46f8-929a-191d83dd0170",
    "user_receiver_id": "3a659c59-70b9-43ff-b88c-9f9bee9034a1",
    "tag_id": "098c5ec8-380c-4925-b4b6-5c4578edfc1e",
    "message": "Muito obrigado pela ajuda",
    "created_at": "2021-06-27T00:32:21.000Z",
    "user_sender": {
      "id": "d8679258-a9d3-46f8-929a-191d83dd0170",
      "name": "nlwValoriza no Admin",
      "email": "nlwvaloriza2@outlook.com",
      "admin": false,
      "password": "$2a$08$fJzQezOlQVXh9DDJPPxGUO.6J0eDQPO.AXx0XGWCTj0xgep5whi8q",
      "created_at": "2021-06-27T00:29:53.000Z",
      "updated_at": "2021-06-27T00:29:53.000Z"
    },
    "user_receiver": {
      "id": "3a659c59-70b9-43ff-b88c-9f9bee9034a1",
      "name": "nlwValoriza",
      "email": "nlwvaloriza@outlook.com",
      "admin": true,
      "password": "$2a$08$OItTpqOno2qooQssi6SGweHggNmmb/nPJW1hzrBLEuUNeiBtEanXq",
      "created_at": "2021-06-27T00:26:01.000Z",
      "updated_at": "2021-06-27T00:26:01.000Z"
    },
    "tag": {
      "id": "098c5ec8-380c-4925-b4b6-5c4578edfc1e",
      "name": "Ajudante master",
      "created_at": "2021-06-27T00:30:51.000Z",
      "updated_at": "2021-06-27T00:30:51.000Z"
    }
  }
]
```
## Create User
```
URL : http://localhost:3000/users
METODO: POST
RETORNO: JSON
AUTH: Bearer
TOKEN: Retorno da API LOGIN
```

### EXEMPLO JSON
```
{
	"name": "nlwValoriza",
	"email": "nlwvaloriza@outlook.com",
	"password": "123456",
  "admin": true
}
```

### EXEMPLO DE RETORNO
``` 
{
  "id": "d8679258-a9d3-46f8-929a-191d83dd0170",
  "name": "nlwValoriza no Admin",
  "email": "nlwvaloriza2@outlook.com",
  "admin": false,
  "password": "$2a$08$fJzQezOlQVXh9DDJPPxGUO.6J0eDQPO.AXx0XGWCTj0xgep5whi8q",
  "created_at": "2021-06-27T00:29:53.000Z",
  "updated_at": "2021-06-27T00:29:53.000Z"
}
``` 

## Create Tag

```
Cria elogio no sistema, somentes usuários admin podem criar.

URL : http://localhost:3000/tags
METODO: POST
RETORNO: JSON
AUTH: Bearer
TOKEN: Retorno da API LOGIN
```

### EXEMPLO JSON
```
{
	"name": "Ajudante master"
}
``` 
### EXEMPLO RETORNO
{
  "id": "098c5ec8-380c-4925-b4b6-5c4578edfc1e",
  "name": "Ajudante master",
  "created_at": "2021-06-27T00:30:51.000Z",
  "updated_at": "2021-06-27T00:30:51.000Z"
}

## Create Compliments

```
Envia um elogio

URL : http://localhost:3000/compliments
METODO: POST
RETORNO: JSON
AUTH: Bearer
TOKEN: Retorno da API LOGIN
```

### EXEMPLO JSON
```
{
	"user_receiver_id": "3a659c59-70b9-43ff-b88c-9f9bee9034a1", 
	"tag_id": "098c5ec8-380c-4925-b4b6-5c4578edfc1e", 
	"message": "Muito obrigado pela ajuda"
}
``` 
### EXEMPLO DE RETORNO
``` 
{
  "id": "df395aa2-f50c-42cc-b466-1223d11245e3",
  "user_sender_id": "d8679258-a9d3-46f8-929a-191d83dd0170",
  "user_receiver_id": "3a659c59-70b9-43ff-b88c-9f9bee9034a1",
  "tag_id": "098c5ec8-380c-4925-b4b6-5c4578edfc1e",
  "message": "Muito obrigado pela ajuda",
  "created_at": "2021-06-27T00:32:21.000Z"
}
``` 

# Features

  [X] Cadastro de Usuário

  [X] Cadastro de Elogios

  [X] Envio de elogios

# Regras

- Cadastro de usuários

  [X] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  [X] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

  [X] Não é permitido cadastrar mais de uma tag com o mesmo nome
  
  [X] Não é permitido cadastrar tag sem nome

  [X] Não é permitido cadastrar por usuários não sejam administradores

- Cadastro de elogios

  [X] Não é permitido um usuário cadastrar um elogio para si mesmo
  
  [X] Não é permitido cadastrar elogios para usuários 
  inválidos

  [X] O usuário precisa estar autenticado na aplicação

# Sobre mim
<h1 align="center">Bruno Tatsch</h1>

<p align="center">Software Developer</p>

<p align="center">
<a href="https://www.linkedin.com/in/bruno-tatsch-b22a7385/" rel="nofollow"> <img src="https://img.shields.io/static/v1?label=LinkedIn&message=brunotastch&color=blue&style=for-the-badge&logo=0A66C2"/> </a>
<a href="mailto:brunotatsch@gmail.com"> <img src="https://img.shields.io/static/v1?label=Gmail&message=brunotatsch@gmail.com&color=lightgrey&style=for-the-badge&logo=mail"/>
</p>