
# Be The Hero
O Be The  Hero é um meio de conectar ONGS que necessitam de algum tipo de ajuda a pessoas que podem contribuir.
Esse projeto foi desenvolvimento durante a Semana OmniStack 11.0, um evento da @Rocketseat, onde construimos uma aplicação completa com Node.js no back-end, ReactJS no front-end e React Native no mobile.

## Features
* A ONG poderá fazer login na aplicação.
* A ONG poderá cadastrar os Casos que ela atende bem como adicionar detalhes sobre esse caso, bem como, uma descrição e o custo daquele caso.
* A ONG poderá disponibilizar o seu contato através de e-mail ou  whatsapp.
* O Usuário poderá ver os casos.
* O Usuário poderá entrar em contato com a ONG.

## Screenshots
<table>
	<tr>
		<th width="100%">
			Web Interface<br>
		</th>
	</tr>
	<tr>
		<td>
			<img width="1080" src="https://raw.githubusercontent.com/danielnegrisolibatista/be-the-hero/master/screenshots/web.gif">
		</td>
	</tr>
</table>

<table>
	<tr>
		<th width="33.3%">
			App splash screen<br>
		</th>
		<th width="33.3%">
			App incident list
		</th>
    <th width="33.3%">
			App incident detail
		</th>
	</tr>
	<tr><!-- Prevent zebra stripes --></tr>
	<tr>
		<td>
			<img width="618" src="https://raw.githubusercontent.com/danielnegrisolibatista/be-the-hero/master/screenshots/splashScreen.jpg">
		</td>
		<td>
			<img width="618" src="https://raw.githubusercontent.com/danielnegrisolibatista/be-the-hero/master/screenshots/incidentList.jpg">
		</td>
    <td>
			<img width="618" src="https://raw.githubusercontent.com/danielnegrisolibatista/be-the-hero/master/screenshots/incidentDetail.jpg">
		</td>
	</tr>
</table>


## Tecnologias
* **Backend**: Uma API RESTful foi criada usando Node.js, Express, Cors. Essa API foi integrada a um banco de dados SQLite usando Knex. Ao final do processo de desenvolvimento, a validação de dados nas rotas foi implementada usando a biblioteca Celebrate. Os testes de unidade e integração foram desenvolvidos usando as bibliotecas Jest, Supertest e entre ambientes.
* **Web**: O frontend do site foi criado usando o ReactJS.
* **Mobile**: o aplicativo mobile foi criado usando o React Native e o Expo.
