import axios from 'axios';

class ViacepService {
  /**
   * Método para buscar dados de um CEP
   * @param cep CEP no formato "12345678" ou "12345-678"
   * @returns Dados do endereço ou erro
   */
  async buscarCEP(cep: string) {
    try {
      // Remove traços ou espaços do CEP para evitar erros
      const cepFormatado = cep.replace(/\D/g, '');
      // Verifica se o CEP tem o formato válido
      if (!/^\d{8}$/.test(cepFormatado)) {
        throw new Error('CEP inválido. Deve conter 8 dígitos.');
      }

      // Faz a requisição à API do ViaCEP
      const response = await axios.get(`https://viacep.com.br/ws/${cepFormatado}/json/`);

      // Verifica se o CEP retornou algum erro
      if (response.data.erro) {
        throw new Error('CEP não encontrado.');
      }

      return response.data; // Retorna os dados do endereço
    } catch (error: any) {
      // Trata e retorna o erro
      throw new Error(error.message || 'Erro ao buscar o CEP.');
    }
  }
}

export default new ViacepService();
