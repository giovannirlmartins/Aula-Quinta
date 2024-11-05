import EmpresaRepository from '../repositories/EmpresaRepository';

class EmpresaService {
  async criarPost(postData: any) {
    // Lógica para criar um novo post
    return await EmpresaRepository.criar(postData);
  }

  // Adicione outros métodos conforme necessário
}

export default new EmpresaService();
