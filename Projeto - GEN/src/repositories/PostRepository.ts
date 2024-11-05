import pool from '../config/database';
import { Post } from '../models/Post';

class PostRepository {
  async criar(post: Post) {
    const result = await pool.query(
      'INSERT INTO posts (titulo, descricao, data_post, status) VALUES ($1, $2, $3, $4) RETURNING *',
      [post.titulo, post.descricao, post.data_post, post.status]
    );
    return result.rows[0];
  }

  // Adicione outros métodos conforme necessário
}

export default new PostRepository();
