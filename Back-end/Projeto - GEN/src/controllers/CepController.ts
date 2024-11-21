import { Request, Response } from 'express';
import ViacepService from '../services/ViacepService';

class CepController {
  async buscar(req: Request, res: Response) {
    const { cep } = req.params;

    try {
      const dadosCep = await ViacepService.buscarCEP(cep);
      res.status(200).json(dadosCep);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default new CepController();
