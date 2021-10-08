# AViDev
## _Sistema de ementa de produtos das revenderoras_

AViDev é um sistema back-end para controle dos pedidos feitos pelas revendedoras.

## Tipos de usuario

- Revendedora, é permitido fazer,listar e visualizar seu pedidos
- Funcionario, analisar pedidos, enviar para produção e gerenciar escala de entrega
- Gerente, possuis as mesma funções dos funcionarios com acrescimo de poder adiciona/remover funcionarios


## Rotas

A seguir as rotas, metodos e o nivel de acesso que precisa ter:

- GUEST - POST - /auth/cadastro - return User -> Revenda
- GUEST - POST - /auth/login - return Token
- GERENTE - POST - /auth/funcionario/cadastro - return User -> Funcionario
- AUTHS - POST - /auth/edit - return User
- GERENTE - POST - /auth/del/:id - return User -> Funcionario
- REVENDA - POST - /pedidos/fazer - return Pedido
- REVENDA - GET - /pedidos/list - return Pedido[] -> Revenda
- FUNCIONARIO - GET - /pedidos/list - return Pedido[] -> All
- FUNCIONARIO - GET - /pedidos/list/producao - return Pedido[] -> Producao
- FUNCIONARIO - GET - /pedidos/analisar/:id - return Pedido
- FUNCIONARIO - GET - /pedidos/analisar/fim/:id - return Pedido
- FUNCIONARIO - GET - /pedidos/prducao/:id - return Pedido
- FUNCIONARIO - GET - /pedidos/prducao/fim/:id - return Pedido
- FUNCIONARIO - GET - /pedidos/escala/add/:id - return Pedido
- FUNCIONARIO - GET - /pedidos/escala/rm/:id - return Pedido
