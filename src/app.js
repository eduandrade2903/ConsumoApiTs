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

// Metódo GET
app.get('/api/v1/user', (req, res) => {
    res.status(200).json(formulario)
});

export default app