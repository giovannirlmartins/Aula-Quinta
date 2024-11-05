import PostRepository from '../repositories/PostRepository';

class PostService {
  async criar() {
    return await PostRepository.criar();
  }

  // Adicione outros métodos conforme necessário
}

export default new PostService();
