import { Router } from 'express';
import ONGController from '../controllers/ONGController';
import ProjetoController from "../controllers/ProjetoController";
import PostController from "../controllers/PostController";

const router = Router();

// Definir rotas da ONG
router.post('/ongs', ONGController.criarONG); // Rota para criar ONG
router.get('/ongs', ONGController.listarTodas); // Rota para listar todas as ONGs
router.get('/ongs/:id_ong', ONGController.consultarPorId); // Rota para consultar ONG por ID

router.post('/projetos', ProjetoController.registrarProjeto); //Rota para criar projetos
router.get('/projetos', ProjetoController.listarTodosProjetos); // Rota para listar todos os projetos

router.post('/post', PostController.criar); // Rota para criar post
router.get('/post', PostController.listarTodos)
export default router;
