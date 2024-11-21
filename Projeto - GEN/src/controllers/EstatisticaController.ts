import { Request, Response } from 'express';
import EstatisticaService from '../services/EstatisticaService';

class EstatisticaController {
  async buscarInfo(req: Request, res: Response) {
    try {
      const dados = await EstatisticaService.buscarInfo(req.params.categoria);
      res.status(200).json(dados);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  // Adicione outros métodos conforme necessário
}

export default new EstatisticaController();
