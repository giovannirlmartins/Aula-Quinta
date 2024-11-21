import pool from '../config/database';
import { ONG } from '../models/ONG';

class ONGRepository {
  // Método para criar uma nova ONG
  async criar(ong: ONG) {
    try {
      const result = await pool.query(
        `INSERT INTO ongs (cnpj_ong, nome, endereco, telefone, email, data_criacao, regiao_atuacao, descricao, senha_acesso_ong) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
         RETURNING *`,
        [
          ong.cnpj_ong,
          ong.nome,
          ong.endereco,
          ong.telefone,
          ong.email,
          ong.data_criacao,
          ong.regiao_atuacao,
          ong.descricao,
          ong.senha_acesso_ong
        ]
      );
      return result.rows[0]; // Retorna a ONG criada
    } catch (error) {
      console.error("Erro ao criar ONG no banco:", error); // Log de erro
      throw new Error('Erro ao criar ONG');
    }
  }

  // Método para consultar uma ONG por ID
  async consultarPorId(id_ong: number) {
    try {
      const result = await pool.query(
        `SELECT * FROM ongs WHERE id_ong = $1`, [id_ong]
      );
      return result.rows[0]
    } catch (error) {
        console.error("Erro ao criar ONG no banco:", error); // Log de erro
        throw new Error('Erro ao criar ONG');
      }
    }
    async listarTodas() {
      try {
        const result = await pool.query('SELECT * FROM ongs');
        return result.rows; // Retorna todas as ONGs
      } catch (error) {
        console.error("Erro ao listar ONGs:", error); // Log de erro
        throw new Error('Erro ao listar ONGs');
      }
    }
}
export default new ONGRepository();