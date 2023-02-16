# ProjetoDenvnology


# Gerenciador de Links

Esse projeto foi para criar uma API
para fazer um CRUD (create, read, update e delete) na parte do backend, onde pegasse um título e um link dado pelo usuário por um formulário, armazenasse no banco de dados e mostrasse a lista com todos.


## Stack utilizada

**Back-end:** Node, Express

**Front-end:** HTML, CSS, Javascript

**Banco de dados:** MongoDB


## Documentação da API

#### Usado para mostrar todas as listas dos links

```http
  GET /links
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
|  none     |  |  |

#### Usado para criar um novo título e link

```http
  POST /link
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title, link`      | `string` | **Obrigatório**. Título e link, em URL  |

#### Usado para atualizar a lista

```http
  PUT /link/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title, link, id`| `string` | **Obrigatório**. o ID e o novo título ou link, necassário somente um  |


#### Usado para deletar um título e um link 

```http
  PUT /link/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. ID da tarefa  |


## Usabilidade
Quando for aberta a página terá 2 campos, um para o título e um para o link , para serem salvos no banco de dados. O usuário que irá cadastrar e para validar, todos os campos precisam estar preenchidos e o link precisa ser uma URL válida. Depois disso será mostrado uma tabela com todos os títulos e links já cadastrados no banco de dados.




## Autores

- [@FabioMTeixeira](https://github.com/FabioMTeixeira)

