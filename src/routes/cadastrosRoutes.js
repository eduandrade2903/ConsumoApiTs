import express from "express";
import CadastroController from "../controllers/cadastrosController.js";

const router = express.Router();

router
    .get("/api/v1/user", CadastroController.listarCadastros)
    .get("/api/v1/user/:id", CadastroController.listarCadastrosPorId)
    .post("/api/v1/user", CadastroController.criarCadastro)
    .put("/api/v1/user/:id", CadastroController.atualizarCadastro)
    .delete("/api/v1/user/:id", CadastroController.excluirCadastro)

export default router;