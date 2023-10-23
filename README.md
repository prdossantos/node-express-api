# Node Express API
Um exemplo de API simples com arquitetura MVC.

## Requisitos
 - Node.js (recomendado v14+)
 - Docker e Docker-Compose
 - MySQL

## Instalação

 1. Clone o Repositório:
 ```bash
    git clone https://github.com/prdossantos/node-express-api.git
    cd node-express-api
 ```
 2. Instale as Dependências:
 ```bash
    npm install
 ```
 3. Crie um arquivo ```.env```, baseado no ```.env.example``` fornecido, crie um arquivo .env com as configurações desejadas.

 4. Inicialize o Banco de Dados com Docker:
 ```bash
    docker-compose up -d
 ```
 Verifique se o BD está rodando e inicie o serviço.

## Uso
 1. Inicie o Servidor:
 ```bash
    npm run start:dev
 ```
 A API agora estará rodando em http://localhost:3000 ou porta indicada na .env.
 
 2. Documentação Swagger:
    Visite http://localhost:3000/docs para ver a documentação Swagger da API e testar os endpoints disponíveis.

 3. Endpoints Principais:
 ```bash
    POST /v1/login: Faça login com email e senha.
 ```
 Utilize os seguintes dados de acesso para efetuar login: 
 ```json
 {
  "email": "root@api.com",
  "password": "password"
 }
 ```

## Testes
Para rodar os testes unitários:
 ```bash
    npm test
 ```

## Bibliotecas e Dependências Utilizadas

- Express
- TypeScript
- bcrypt: Biblioteca para ajudar a fazer hash de senhas.
- jsonwebtoken: Implementação do JSON Web Tokens.
- swagger-ui-express e swagger-jsdoc: Para a documentação da API usando Swagger.
- MySQL: Driver Node.js para MySQL.

