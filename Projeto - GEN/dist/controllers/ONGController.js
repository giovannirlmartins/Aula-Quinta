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
exports.ONGController = void 0;
const ONGService_1 = require("../services/ONGService");
class ONGController {
    constructor() {
        this.ongService = new ONGService_1.ONGService();
        // Colocar outros métodos abaixo
    }
    listarProjetos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_ong } = req.params;
            const projetos = yield this.ongService.listarProjetos(parseInt(id_ong));
            res.json(projetos);
        });
    }
    registrarProjeto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_ong } = req.params;
            const { titulo, descricao, data_inicio, data_final } = req.body;
            const projeto = yield this.ongService.registrarProjeto(parseInt(id_ong), titulo, descricao, data_inicio, data_final);
            res.json(projeto);
        });
    }
    static criarONG(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ongService = new ONGService_1.ONGService(); // Instância local
                const novaONG = yield ongService.criar(req.body);
                res.status(201).json(novaONG);
            }
            catch (error) {
                res.status(500).json({ message: 'error' });
            }
        });
    }
    static consultarProjetos(arg0, consultarProjetos) {
        throw new Error('Method not implemented.');
    }
}
exports.ONGController = ONGController;
exports.default = new ONGController();
