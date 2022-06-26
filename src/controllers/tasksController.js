import tasks from "../models/Task.js";

class TaskController {

    // GET method persisting data in MongoDB
    static listarTasks = (req, res) => { 
        tasks.find((err, tasks) => {
            res.status(200).json(tasks)
        })
    }

    // GET by ID
    static listarTaskPorId = (req, res) => {
        const id = req.params.id;

        tasks.findById(id, (err, tasks) => {
            if(err) {
                res.status(404).send({message: `${err.message} - Usuário não encontrado.`});
            } else {
                res.status(200).send(tasks);
            }
        })
    }

    // POST method
    static criarTask = (req, res) => {
        let task = new tasks(req.body);

        task.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar usuário.`})
            } else {
                res.status(201).send(task.toJSON())
            }
        })
    }

    // PUT method
    static atualizarTask = (req, res) => {
        const id = req.params.id;

        tasks.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Task atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    // DELETE method
    static excluirTask = (req, res) => {
        const id = req.params.id;

        tasks.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Usuário removido com sucesso'});
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}


export default TaskController;