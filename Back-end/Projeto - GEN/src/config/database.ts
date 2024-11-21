import { Pool } from 'pg';
const dotenv = require('dotenv');
dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

// import * as dotenv from 'dotenv'; // Use essa forma de importação para evitar problemas
// dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env
// Configuração do pool de conexões com SSL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,  // Evita erro de SSL relacionado a certificado
  }
});

export default pool;
