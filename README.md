# Desafios do curso
## Desafio 1 (Módulo 3 e 4)
Criar um novo projeto do zero com as seguintes especificações:

1) Criar um servidor HTTP usando o NodeJS rodando na porta 3000 usando o core module 'http'

2) Trabalhar com duas rotas

*  "/" que irá exibir um texto de boas vindas
*  "/user" que irá exibir um lista de não ordenada como nomes aleatórios

3) Também adicionar um fomulário da página "/"
* O formulário terá um input texto e um name e botão de submit
* O formulário deve enviar um POST request para "/create-user"

4) Ao atingir a rota "/create-user" devemos exibir o conteúdo do input no console e o usuário deve ser redirecionado para "/"
### O que aprendi com o desafio ? 
* Utilizar os core module
* Criar um servidor http
* EventLoop e register
* Trabalhar com rotas
* Importar arquivos externos
* Streans e buffer
* Criar um body parser
* Redirecionar páginas
* Usar o npm
* Instalar pacotes de terceiros
* Identificar os tipos de erros
* Usar o debug do VScode
### O preciso melhorar ?   
* Como o nodeJS funcionar por tras dos panos 
* Como o nodeJS lidar com Stream e Buffer
## Desafio 2 (Módulo 5)
1) Criar um novo projeto utilizando o npm, instalar o express.js e nodemon
2) Criar um app com express, devemos usar duas middlaware para fazer o log de algum texto e uma delas deve retornar uma resposta
3) Criar duas middlawares para lidar com request de "/" e "/users" e enviar algum texto como resposta
### O que aprendi com o desafio ? 
* Criar um aplicação usando o express
* Usar as middlaware para interceptar os requests

## Desafio 3 (Módulo 5)
1) Criar um novo projeto usando o Express
2) Criar duas rotas utilizando express router que deverá servir arquivo html ("/" e "/admin/user")
3) Adicionar arquivo estatico para serem servidos
### O que aprendi com o desafio ? 
* Criar rotas em diretórios separados utilizando o Express Router
* Fazer o parse do request
* Servir arquivos estáticos 
* Criar utilitários
* Sua o diretório /public
* Trabalhar com o diretório /views
* Usar middleware para rotas não definidas, 404 page not found
* Enviar arquivo html pelo request
## Desafio 4 (Módulo 6)
1) Criar um novo projeto com express e nodemon
2) Usar uma template engine (pug ou Ejs ou ...)
3) Adicionar duas rotas
* "/" com um formulário que permite adicionar um nome e exibir no console
* "/users" exibe uma <ul> e exibir os nomes de um array passado para o template em um loop
### O que aprendi com o desafio ? 
* Usar o pug como template engine
* Sintaxe do pug
* Loops e condicionais usando o pug
* Usar um main layout

## Desafio 5 (Módulo 7)
1) Criar um novo projeto com o express e nodemon
2) Usar a extrutura MVC
3) Criar duas rotas "/" e "/users"
4) "/" para o usuário adicionar o seu nome
5) "/user" exibir todos os nomes de usuários
6) Salvar os dados em um arquivo de texto 
### O que aprendi com o desafio ? 
* Lidar com a estrutura MVC
* Usar os métodos da fs module