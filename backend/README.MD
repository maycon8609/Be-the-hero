<style>
  .row {
    display: flex;
    font-weight: bold;
  }

  .green {
    color: #00a000;
  }

  .purple {
    color: #7129c1;
  }

  .red {
    color: #ff0000;
  }

  .yellow {
    color: #e5df29;
  }

  .bold {
    font-weight: bold;
  }

  .img {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .margin {
    margin: 10px 0 10px 0;
  }

</style>

#### `npm install` para instalar as dependencias da api

```
  Help com os comandos disponiveis knex
   npx knex

  Criar migration
   npx knex migrate:make < name migration >

  Subir migations knex sqlite
   npx knex migrate:latest
```
___

### Routes
  - #### Ongs
  > <b class="green">POST</b> Create
  > http://localhost:3333/ongs
  >
  > recebe os seguintes parametros todos __String__
  >
  > <div class="row"><div class="green">"name"</div>: <div class="yellow">"TEST"</div>,</div>
	> <div class="row"><div class="green">"email"</div>: <div class="yellow">"test@api.com"</div>,</div>
	> <div class="row"><div class="green">"whatsapp"</div>: <div class="yellow">"123456789"</div>,</div>
	> <div class="row"><div class="green">"city"</div>: <div class="yellow">"Teresina"</div>,</div>
	> <div class="row"><div class="green">"uf"</div>: <div class="yellow">"pi"</div></div>

___

  > <b class="purple">GET</b> List
  > http://localhost:3333/ongs
  >
  > retornar todas as ongs cadastradas

___

  - ### Login
  > <b class="green">POST</b> Create
  > http://localhost:3333/session
  >
  > recebe como parametro o id da ONG previamente cadastrada
  >
  > <div class="row"><div class="green">"id"</div>: <div class="yellow">"57a41c86"</div></div>
___

  - ### Profile
  > <b class="purple">GET</b> List
  > http://localhost:3333/session
  >
  > lista os casos especificos de cada ONG
  > recebe no **HEADER** da requisição um parametro
  > **authorization** = ID da ONG

  <div class="img"><img src="data-insomnia/profile.png"></div>

___

  - ### Incident
  > <b class="green">POST</b> Create
  > http://localhost:3333/incident
  >
  > rota responsavel por registrar novos incidents
  > recebe no **HEADER** da requisição um parametro
  > **authorization** = ID da ONG
  >
  > no body recebe os seguintes parametros todos __String__ exceto value que e um tipo numerico
  >
  > <div class="row"><div class="green">"title"</div>: <div class="yellow">"donate"</div>,</div>
  > <div class="row"><div class="green">"description"</div>: <div class="yellow">"donate money"</div>,</div>
  > <div class="row"><div class="green">"value"</div>: <div class="purple">115.8</div>,</div>
  >

  <div class="img margin"><img src="data-insomnia/incident.png"></div>

  > <b class="purple">GET</b> List
  > http://localhost:3333/incidents
  >
  > na rota de listagem de incidents so e preciso receber o parametro **page**
  > sevira para fazer a paginação
  > nos Query params sera enviado o numero da pagina
  >
  > <div class="img margin"><img src="data-insomnia/incidents.png"></div>


  > <b class="red">DELETE</b> Delete
  > http://localhost:3333/incident/:id
  >
  > recebe o ID do incidet a ser deletado no req.params
  > recebe no **HEADER** da requisição o authorization
  > **authorization** = ID da ONG
  > assim só e possivel deletar os incidents de quem esta logado
  >
  > <div class="img margin"><img src="data-insomnia/delete.png"></div>

___

### Button to export routes to insomnia
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Be%20the%20hero&uri=https%3A%2F%2Fgithub.com%2Fmaycon8609%2FBe-the-hero%2Fblob%2Fmaster%2Fbackend%2Fdata-insomnia%2FInsomnia-All_2020-04-18.json)

