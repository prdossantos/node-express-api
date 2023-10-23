import express from 'express';
import routes from './routes';
import cors from 'cors';
require('dotenv').config();
import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from './swagger.config';

const port = process.env.PORT || 3000;
const app = express();

app.use(cors())
app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use(routes);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}\nDocs on http://localhost:${port}/docs`);
});
