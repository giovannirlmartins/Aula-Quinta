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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ONGService = void 0;
const ONGRepository_1 = require("../repositories/ONGRepository");
class ONGService {
    constructor() {
        this.ongRepository = new ONGRepository_1.ONGRepository();
        // Colocar outros métodos abaixo
    }
    criar(ongData) {
        return __awaiter(this, void 0, void 0, function* () {
            return ONGRepository_1.ONGRepository.criar(ongData);
        });
    }
    listarProjetos(id_ong) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ongRepository.getAllProjects(id_ong);
        });
    }
    registrarProjeto(id_ong, titulo, descricao, data_inicio, data_final) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ongRepository.registerProject(id_ong, titulo, descricao, data_inicio, data_final);
        });
    }
}
exports.ONGService = ONGService;
exports.default = new ONGService();
