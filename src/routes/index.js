import express from "express";
import cadastros from "./cadastrosRoutes.js";
import tasks from "./tasksRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Api de Cadastro"})
    });

    app.use(
        express.json(),
        cadastros, 
        tasks
    )
};

export default routes;