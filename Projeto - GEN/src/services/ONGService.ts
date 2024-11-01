import { ONG } from '../models/ONG';
import { ONGRepository } from '../repositories/ONGRepository';

export class ONGService {
  private ongRepository = new ONGRepository();
  async criar(ongData: ONG) {
    return ONGRepository.criar(ongData);
  }
  async listarProjetos(id_ong: number) {
    return this.ongRepository.getAllProjects(id_ong);
  }

  async registrarProjeto(id_ong: number, titulo: string, descricao: string, data_inicio: Date, data_final: Date) {
    return this.ongRepository.registerProject(id_ong, titulo, descricao, data_inicio, data_final);
  }

// Colocar outros métodos abaixo
}

export default new ONGService();