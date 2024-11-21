import { Projeto } from '../models/Projeto';
import ProjetoRepository from '../repositories/ProjetoRepository';

class ProjetoService {
  async registrarProjeto(projetoData: Projeto ) {
    return await ProjetoRepository.registrar(projetoData);
  }

  async listarTodosProjetos() {
    try {
      return await ProjetoRepository.listarTodosProjetos(); // Retorna todas as ONGs
    } catch (error) {
      console.error("Erro no serviço ao listar projetos:", error);
      throw new Error('Erro ao listar projetos');
    }
  }
  // Adicione outros métodos conforme necessário
}

export default new ProjetoService();
