"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ONGController_1 = require("../controllers/ONGController");
const router = (0, express_1.Router)();
// Definindo rotas para ONGs
router.post('/ongs', ONGController_1.ONGController.criarONG); // Nova rota para criar ONG
router.get('/ongs/:id_ong/projetos', ONGController_1.ONGController.consultarProjetos);
exports.default = router;
