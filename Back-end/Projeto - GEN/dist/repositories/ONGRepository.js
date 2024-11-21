"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ONGRepository = void 0;
const database_1 = __importDefault(require("../config/database"));
class ONGRepository {
    static criar(ongData) {
        throw new Error('Method not implemented.');
    }
    criar(ong) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO ongs (cnpj_ong, nome, endereco, telefone, email, data_criacao, regiao_atuacao, descricao, senha_acesso_ong) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [
                ong.cnpj_ong,
                ong.nome,
                ong.endereco,
                ong.telefone,
                ong.email,
                ong.data_criacao,
                ong.regiao_atuacao,
                ong.descricao,
                ong.senha_acesso_ong
            ]);
            return result.rows[0];
        });
    }
    getAllProjects(id_ong) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM projeto WHERE id_ong = $1';
            const result = yield database_1.default.query(query, [id_ong]);
            return result.rows;
        });
    }
    registerProject(id_ong, titulo, descricao, data_inicio, data_final) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO projeto (id_ong, titulo, descricao, data_inicio, data_final)
                   VALUES ($1, $2, $3, $4, $5) RETURNING *`;
            const result = yield database_1.default.query(query, [id_ong, titulo, descricao, data_inicio, data_final]);
            return result.rows[0];
        });
    }
}
exports.ONGRepository = ONGRepository;
exports.default = new ONGRepository();
