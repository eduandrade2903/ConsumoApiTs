//importanto o express
import express from "express";

const app = express();

// tranformar GET/PUT em objeto para conseguir manipular
app.use(express.json());

const formulario = [
    {id: 1, 
        "name": "Joao Silva",
        "cpf": "908.415.400-20",
        "birthDate": "01/01/2000",
        "email": "joao@silva@compasso.com",
        "password": "swordfish",
        "address": "streetA",
        "number": "A25",
        "complement": "house",
        "city": "São Paulo",
        "state": "SP",
        "country": "Brasil",
        "zipCode": "93950-000"
    }
];

app.get('/', (req, res) => {
    res.status(200).send('Formulario');
});

// GET method
app.get('/api/v1/user', (req, res) => {
    res.status(200).json(formulario)
});

// POST method
app.post('/api/v1/user', (req, res) => {
    formulario.push(req.body);
    res.status(201).send('O formulario foi cadastrado com sucesso');
});

// PUT method
app.put('/api/v1/user/:id', (req, res) => {
    let index = buscaCadastro(req.params.id);
    formulario[index].name = req.body.name;
    res.json(formulario);
});


// Function to fetch ID
function buscaCadastro(id) {
    return formulario.findIndex(cadastro => cadastro.id == id);
}


export default app