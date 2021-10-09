# AViDev
## _Sistema de ementa de produtos das revenderoras_

AViDev é um sistema back-end para controle dos pedidos feitos pelas revendedoras.

## Tipos de usuario

- Revendedora, é permitido fazer,listar e visualizar seu pedidos
- Funcionario, analisar pedidos, enviar para produção e gerenciar escala de entrega
- Gerente, possuis as mesma funções dos funcionarios com acrescimo de poder adiciona/remover funcionarios, é gerado automaticamente quando não encrontra ele no banco de dados


## Rotas

A seguir as rotas, metodos e o nivel de acesso que precisa ter:

- GUEST - POST - /auth/cadastro - return User
- GUEST - POST - /auth/login - return accessToken
- GERENTE - POST - /auth/funcionario/cadastro - return User
- AUTHS - POST - /auth/edit - return User
- GERENTE - POST - /auth/del/:id - return User
- REVENDA - POST - /pedidos/fazer - return Success
- REVENDA - GET - /pedidos/list - return Pedido[]
- FUNCIONARIO - GET - /pedidos/analisar/:id - return Pedido
- FUNCIONARIO - POST - /pedidos/analisar/:id/fim - return Success
- FUNCIONARIO - GET - /pedidos/list - return Pedido[]
- FUNCIONARIO - GET - /producao/list - return Pedido[]
- REVENDA - GET - /producao/list - return Pedido[]
- FUNCIONARIO - GET - /prducao/start/:id - return Success
- FUNCIONARIO - GET - /prducao/stop/:id- return Success
- FUNCIONARIO - GET - /escala/list - return Pedido[]
- REVENDA - GET - /escala/list - return Pedido[]
- FUNCIONARIO - GET - /escala/add/:id - return Success
- FUNCIONARIO - GET - /escala/del/:id - return Success
