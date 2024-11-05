import { Request, Response } from 'express';
import PostService from '../services/PostService';

class PostController {
  async criar(req: Request, res: Response) {
    try {
      const posts = await PostService.criar();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Adicione outros métodos conforme necessário
}

export default new PostController();
