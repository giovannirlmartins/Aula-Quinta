import { Request, Response } from 'express';
import ProjetoService from '../services/ProjetoService';

class ProjetoController {
  async registrarProjeto(req: Request, res: Response) {
    try {
      const projeto = await ProjetoService.registrarProjeto(req.body);
      res.status(201).json(projeto);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Adicione outros métodos conforme necessário
}

export default new ProjetoController();
