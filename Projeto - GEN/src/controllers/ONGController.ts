import { Request, Response } from 'express';
import { ONGService } from '../services/ONGService';

export class ONGController {
  private ongService = new ONGService();

  async listarProjetos(req: Request, res: Response) {
    const { id_ong } = req.params;
    const projetos = await this.ongService.listarProjetos(parseInt(id_ong));
    res.json(projetos);
  }

  async registrarProjeto(req: Request, res: Response) {
    const { id_ong } = req.params;
    const { titulo, descricao, data_inicio, data_final } = req.body;
    const projeto = await this.ongService.registrarProjeto(parseInt(id_ong), titulo, descricao, data_inicio, data_final);
    res.json(projeto);
  }

  static async criarONG(req: Request, res: Response) {
    try {
      const ongService = new ONGService();  // Instância local
      const novaONG = await ongService.criar(req.body);
        res.status(201).json(novaONG);
      } catch (error) {
        res.status(500).json({ message: 'error' });
      }
  }

  static consultarProjetos(arg0: string, consultarProjetos: any) {
    throw new Error('Method not implemented.');
}
  
 // Colocar outros métodos abaixo
}
export default new ONGController();