import { Request, Response } from 'express';
import ProjetoService from '../services/ProjetoService';

class ProjetoController {
  async registrarProjeto(req: Request, res: Response) {
    try {
      const projeto = await ProjetoService.registrarProjeto(req.body);
      res.status(201).json(projeto);
    } catch (error) {
      res.status(500).json({ message: error});
    }
  }

  async listarTodosProjetos(req: Request, res: Response) {
    try {
      const ongs = await ProjetoService.listarTodosProjetos(); // Chama o service para listar as ONGs
      res.status(200).json(ongs);
    } catch (error) {
      console.error("Erro ao listar projetos:", error); // Log do erro
      res.status(500).json({ message: "Erro ao listar projetos", error});
    }
  }
  // Adicione outros métodos conforme necessário
}

export default new ProjetoController();
