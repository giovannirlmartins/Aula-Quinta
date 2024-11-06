import { Router } from 'express';
import ONGController from '../controllers/ONGController';

const router = Router();

// Definir rotas da ONG
router.post('/ongs', ONGController.criarONG); // Rota para criar ONG
router.get('/ongs', ONGController.listarTodas); // Rota para listar todas as ONGs
router.get('/ongs/:id_ong', ONGController.consultarPorId); // Rota para consultar ONG por ID

export default router;
