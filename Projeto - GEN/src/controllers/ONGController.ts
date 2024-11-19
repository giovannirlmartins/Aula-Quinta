
import { Request, Response } from 'express';
import ONGService from '../services/ONGService';

class ONGController {
  // Método para criar uma nova ONG
  async criarONG(req: Request, res: Response) {
    try {
      // Vamos logar os dados da requisição para garantir que o corpo está chegando corretamente
      console.log("Dados da requisição:", req.body);

      const novaONG = await ONGService.criar(req.body); // Envia os dados da ONG para o service
      console.log("ONG criada:", novaONG); // Loga a ONG criada

      res.status(201).json(novaONG); // Retorna a ONG criada com status 201
    } catch (error) {
      console.error("Erro ao criar ONG:", error); // Log do erro no servidor
      res.status(500).json({ message: "Erro interno ao criar ONG", error }); // Melhor mensagem de erro
    }
  }

  // Método para consultar uma ONG por ID
  async consultarPorId(req: Request, res: Response) {
    const { id_ong } = req.params;
    try {
      const ong = await ONGService.consultarPorId(Number(id_ong)); // Converte o id para número
      if (ong) {
        res.status(200).json(ong);
      } else {
        res.status(404).json({ message: 'ONG não encontrada' });
      }
    } catch (error) {
      console.error("Erro ao consultar ONG por ID:", error); // Log do erro
      res.status(500).json({ message: "Erro ao consultar ONG", error });
    }
  }

  // Método para listar todas as ONGs
  async listarTodas(req: Request, res: Response) {
    try {
      const ongs = await ONGService.listarTodas(); // Chama o service para listar as ONGs
      res.status(200).json(ongs);
    } catch (error) {
      console.error("Erro ao listar ONGs:", error); // Log do erro
      res.status(500).json({ message: "Erro ao listar ONGs", error});
    }
  }
}

export default new ONGController();
