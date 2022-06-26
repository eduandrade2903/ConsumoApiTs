import express from "express";
import TaskController from "../controllers/tasksController.js";

const router = express.Router();

router
    .get("/api/v1/task", TaskController.listarTasks)
    .get("/api/v1/task/:id", TaskController.listarTaskPorId)
    .post("/api/v1/task", TaskController.criarTask)
    .put("/api/v1/task/:id", TaskController.atualizarTask)
    .delete("/api/v1/task/:id", TaskController.excluirTask)

export default router;