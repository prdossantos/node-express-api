# Node Express API
Um exemplo de API simples com arquitetura MVC.

## Requisitos
 - Node.js (recomendado v14+)
 - Docker e Docker-Compose ( para rodar o banco de dados )
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
 3. Inicialize o Banco de Dados com Docker:
 ```bash
    docker-compose up -d
 ```
 Verifique se o BD está rodando e inicie o serviço. Este processo irá criar as tabelas e popular alguns dados.

## Uso
 1. Inicie o Servidor:
 ```bash
    npm run start:dev
 ```
 A API agora estará rodando em http://localhost:3000 ou porta indicada na ```.env```.
 
 2. Documentação Swagger:
    Visite http://localhost:3000/docs para ver a documentação Swagger da API e testar os endpoints disponíveis.

 3. Endpoints Principais:
 ```bash
    POST /v1/offers: Criar uma nova oferta.
    PUT /v1/offers/:id: Adiciona esta oferta como favorita.
    DELETE /v1/offers/:id: Exclui a oferta.
    GET /v1/offers: Lista todas as ofertas
 ```

## Banco de dados
Para acessar o banco de dados utilize as credenciais abaixo em: http://localhost:8081
```env
- DB_HOST=host.docker.internal
- DB_USER=root
- DB_PASSWORD=password
- DB_NAME=api
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

## Regras para implementação de compra:
 - Quais as são todas as regras de validação, como: valores minímos e máximos, capital necessário, tipos de compradores...?
 - Qual os tipos de ordem permitidas?
 - Uma boa análise da regra de negocio com detalhamento de fluxos.

## Implementações para o futuro:
 - Validação de entrada dados
 - Definição de dados de saída
 - Criar tests unitários e de integração com cobertura mínima de X%
 - Deixar carregamento da instancio do BD dinâmica
 - Criar um divisâo pode pastas dentro de cada caso
 - Migrar para um framework para ganhar agilidade
 - Criar testes de carga
 - Implementar autenticação
 - Entre outros...