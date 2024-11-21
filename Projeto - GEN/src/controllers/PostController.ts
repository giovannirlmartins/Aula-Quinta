import { Request, Response } from 'express';
import PostService from '../services/PostService';

class PostController {
  async criar(req: Request, res: Response) {
    try {
      const post = req.body; // Obtendo os dados do post do corpo da requisição
      const novoPost = await PostService.criar(post);
      res.status(200).json(novoPost);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async listarTodos(req: Request, res: Response) {
    try {
      const posts = await PostService.listarTodos(); // Chama o service para listar os posts
      res.status(200).json(posts);
    } catch (error) {
      console.error("Erro ao listar os posts:", error); // Log do erro
      res.status(500).json({ message: "Erro ao listar os posts", error});
    }
  }
  // Adicione outros métodos conforme necessário
}

export default new PostController();
