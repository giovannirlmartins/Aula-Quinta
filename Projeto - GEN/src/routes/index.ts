import { Router } from 'express';

import { ONGController } from '../controllers/ONGController';

const router = Router();

// Definindo rotas para ONGs
router.post('/ongs', ONGController.criarONG); // Nova rota para criar ONG
router.get('/ongs/:id_ong/projetos', ONGController.consultarProjetos);

export default router;
