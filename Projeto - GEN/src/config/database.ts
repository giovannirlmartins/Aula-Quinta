import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

// Configuração do pool de conexões com SSL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
    // Especificando explicitamente a versão do protocolo TLS (1.2 ou 1.3)
    secureProtocol: 'TLS_method',  // Usando método de TLS seguro
  }
});

export default pool;
