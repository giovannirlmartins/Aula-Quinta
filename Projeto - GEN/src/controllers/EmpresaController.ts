import { Request, Response } from 'express';
import EmpresaService from '../services/EmpresaService';

class EmpresaController {
  async criarPost(req: Request, res: Response) {
    try {
      const novoPost = await EmpresaService.criarPost(req.body);
      res.status(201).json(novoPost);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Adicione outros métodos conforme necessário
}

export default new EmpresaController();
