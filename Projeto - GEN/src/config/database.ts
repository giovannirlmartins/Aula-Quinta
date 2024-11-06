import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Dependendo do seu banco, pode ser necessário isso para conexão SSL
  }
});

export default pool;
