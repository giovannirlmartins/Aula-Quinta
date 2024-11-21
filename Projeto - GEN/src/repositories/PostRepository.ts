import pool from '../config/database';
import { Post } from '../models/Post';

class PostRepository {
  async criar(post: Post): Promise<any> {
    const result = await pool.query(
      'INSERT INTO posts (titulo, descricao, data_post, status) VALUES ($1, $2, $3, $4) RETURNING *',
      [post.titulo, post.descricao, post.data_post, post.status]
    );
    return result.rows[0];
  }

  async listarTodos() {
    try {
      const result = await pool.query('SELECT * FROM posts');
      return result.rows; // Retorna todos posts
    } catch (error) {
      console.error("Erro ao listar os posts:", error); // Log de erro
      throw new Error('Erro ao listar os posts');
    }
  }
  // Adicione outros métodos conforme necessário
}

export default new PostRepository();
