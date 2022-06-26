import express from "express";
import CadastroController from "../controllers/cadastrosController.js";

const router = express.Router();

router
    .get("/api/v1/user", CadastroController.listarCadastros)


export default router;