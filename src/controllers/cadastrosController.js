import cadastros from "../models/Cadastro.js";

class CadastroController {

    // GET method persisting data in MongoDB
    static listarCadastros = (req, res) => { 
        cadastros.find()
            .populate('user')
            .exec((err, cadastros) => {
            res.status(200).json(cadastros)
        })
    }

    // GET by ID
    static listarCadastrosPorId = (req, res) => {
        const id = req.params.id;

        cadastros.findById((err, cadastros) => {
            if(err) {
                res.status(404).send({message: `${err.message} - Usuário não encontrado.`});
            } else {
                res.status(200).send(cadastros);
            }
        })
    }

    // POST method
    static criarCadastro = (req, res) => {
        let cadastro = new cadastros(req.body);

        cadastro.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar usuário.`})
            } else {
                res.status(201).send(cadastro.toJSON())
            }
        })
    }

    // PUT method
    static atualizarCadastro = (req, res) => {
        const id = req.params.id;

        cadastros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Cadastro atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    // DELETE method
    static excluirCadastro = (req, res) => {
        const id = req.params.id;

        cadastros.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Usuário removido com sucesso'});
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}


export default CadastroController