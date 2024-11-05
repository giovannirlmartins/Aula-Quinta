import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

// Aqui você pode definir suas rotas, por exemplo:
app.use('/ongs', );

export default app;
