import { Post } from '../models/Post';
import PostRepository from '../repositories/PostRepository';

class PostService {
  async criar(post: Post) {
    return await PostRepository.criar(post); //Passando o post para o repositório
  }

  async listarTodos() {
    try {
      return await PostRepository.listarTodos(); // Retorna todos os posts
    } catch (error) {
      console.error("Erro no serviço ao listar os posts:", error);
      throw new Error('Erro ao listar os posts');
    }
  }
  // Adicione outros métodos conforme necessário
}

export default new PostService();
