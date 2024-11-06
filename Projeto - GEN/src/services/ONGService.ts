import ONGRepository from '../repositories/ONGRepository';
import { ONG } from '../models/ONG';

class ONGService {
  // Método para criar uma nova ONG
  async criar(ongData: ONG) {
    try {
      return await ONGRepository.criar(ongData); // Chama o repositório para inserir a ONG
    } catch (error) {
      console.error("Erro no serviço de ONG:", error); // Log do erro
      throw new Error('Erro ao criar ONG');
    }
  }

  // Método para consultar uma ONG por ID
  async consultarPorId(id_ong: number) {
    try {
      return await ONGRepository.consultarPorId(id_ong); // Consulta a ONG por ID
    } catch (error) {
      console.error("Erro no serviço ao consultar ONG:", error);
      throw new Error('Erro ao consultar ONG');
    }
  }

  // Método para listar todas as ONGs
  async listarTodas() {
    try {
      return await ONGRepository.listarTodas(); // Retorna todas as ONGs
    } catch (error) {
      console.error("Erro no serviço ao listar ONGs:", error);
      throw new Error('Erro ao listar ONGs');
    }
  }
}

export default new ONGService();

