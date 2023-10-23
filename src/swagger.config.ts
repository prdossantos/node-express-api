import swaggerJsDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node Express API',
      version: '1.0.0',
      description: 'Documentação Node Express API'
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`
      }
    ]
  },
  apis: ['./src/routes/*.ts'], // path to the files where endpoints are specified
};

const specs = swaggerJsDoc(options);

export default specs;
