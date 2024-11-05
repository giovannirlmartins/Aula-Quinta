import ProjetoRepository from '../repositories/ProjetoRepository';

class ProjetoService {
  async registrarProjeto(projetoData: any) {
    return await ProjetoRepository.registrar(projetoData);
  }

  // Adicione outros métodos conforme necessário
}

export default new ProjetoService();
