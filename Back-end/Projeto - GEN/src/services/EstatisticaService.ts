import EstatisticaRepository from '../repositories/EstatisticaRepository';

class EstatisticaService {
  async buscarInfo(categoria: string) {
    return await EstatisticaRepository.buscarInfo(categoria);
  }

  // Adicione outros métodos conforme necessário
}

export default new EstatisticaService();
