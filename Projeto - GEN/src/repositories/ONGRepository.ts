import pool from '../config/database';
import { ONG } from '../models/ONG';

export class ONGRepository {
    static criar(ongData: ONG) {
        throw new Error('Method not implemented.');
    }
    async criar(ong: ONG) {
        const result = await pool.query(
          'INSERT INTO ongs (cnpj_ong, nome, endereco, telefone, email, data_criacao, regiao_atuacao, descricao, senha_acesso_ong) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
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
        return result.rows[0];
      }
  async getAllProjects(id_ong: number): Promise<any> {
    const query = 'SELECT * FROM projeto WHERE id_ong = $1';
    const result = await pool.query(query, [id_ong]);
    return result.rows;
  }

  async registerProject(id_ong: number, titulo: string, descricao: string, data_inicio: Date, data_final: Date) {
    const query = `INSERT INTO projeto (id_ong, titulo, descricao, data_inicio, data_final)
                   VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const result = await pool.query(query, [id_ong, titulo, descricao, data_inicio, data_final]);
    return result.rows[0];
  }
// Colocar outros métodos abaixo
}
export default new ONGRepository();