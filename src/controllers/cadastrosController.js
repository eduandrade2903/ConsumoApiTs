import cadastros from "../models/Cadastro.js";

class CadastroController {

    // GET method persisting data in MongoDB
    static listarCadastros = (req, res) => { 
        cadastros.find((err, cadastros) => {
            res.status(200).json(cadastros)
        })
    }
}


export default CadastroController