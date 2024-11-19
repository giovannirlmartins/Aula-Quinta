import pool from '../config/database';
import { Projeto } from '../models/Projeto';

class ProjetoRepository {
  async registrar(projeto: Projeto) {
    const result = await pool.query(
      'INSERT INTO projetos (titulo, descricao, data_inicio, data_final, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [projeto.titulo, projeto.descricao, projeto.data_inicio, projeto.data_final, projeto.status]
    );
    return result.rows[0];
  }

  async listarTodosProjetos() {
    try {
      const result = await pool.query('SELECT * FROM projetos');
      return result.rows; // Retorna todos os projetos
    } catch (error) {
      console.error("Erro ao listar os projetos:", error); // Log de erro
      throw new Error('Erro ao listar os projetos');
    }
  }
  // Adicione outros métodos conforme necessário
}

export default new ProjetoRepository();
