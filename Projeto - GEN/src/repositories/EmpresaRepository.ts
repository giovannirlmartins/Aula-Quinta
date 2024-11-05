import pool from '../config/database';
import { Empresa } from '../models/Empresa';

class EmpresaRepository {
  async criar(empresa: Empresa) {
    const result = await pool.query(
      'INSERT INTO empresas (cnpj_empresa, nome, endereco, telefone, email, descricao, senha_acesso_empresa) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [empresa.cnpj_empresa, empresa.nome, empresa.endereco, empresa.telefone, empresa.email, empresa.descricao, empresa.senha_acesso_empresa]
    );
    return result.rows[0];
  }

  // Adicione outros métodos conforme necessário
}

export default new EmpresaRepository();
