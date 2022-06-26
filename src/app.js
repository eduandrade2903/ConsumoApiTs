//importanto o express
import express from "express";
import db from "./config/dbConnect.js";
import cadastros from "./models/Cadastro.js";
import routes from "./routes/index.js";


db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
})


const app = express();

app.use(express.json());

routes(app);

// tranformar GET/PUT em objeto para conseguir manipular
app.use(express.json());

// GET by ID
app.get('/api/v1/user/:id', (req, res) => {
    let index = buscaCadastro(req.params.id);
    res.json(cadastros[index]);
});

// PUT method
app.put('/api/v1/user/:id', (req, res) => {
    let index = buscaCadastro(req.params.id);
    // esta alterando somente o name, o restante não
    cadastros[index].name = req.body.name;
    res.json(cadastros);
});


// Function to fetch ID
function buscaCadastro(id) {
    return cadastros.findIndex(cadastro => cadastro.id == id);
}


export default app