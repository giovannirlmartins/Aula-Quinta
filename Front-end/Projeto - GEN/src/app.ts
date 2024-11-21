import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes'; // Importando as rotas

const app: Application = express();

// Middleware para parse de JSON e habilitar CORS
app.use(cors());
app.use(bodyParser.json());

// Definindo a rota base
app.use('/api', router);
// Rota para verificar se o servidor está ativo
app.get('/', (req, res) => {
  res.send('Servidor está ativo!');
});

export default app;
