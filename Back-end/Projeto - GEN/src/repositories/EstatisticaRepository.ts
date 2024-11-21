import pool from '../config/database';
import { Estatistica } from "../models/Estatistica";

class EstatisticaRepository {
  async buscarInfo(categoria: string) {
    const result = await pool.query('SELECT * FROM estatisticas WHERE categoria = $1', [categoria]);
    return result.rows;
  }

  // Adicione outros métodos conforme necessário
}

export default new EstatisticaRepository();
