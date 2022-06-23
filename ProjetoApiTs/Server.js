const http = require('http');
const port = 3000;

const rotas = {
    '/': 'Inicio',
    '/User' : 'entrei na página User',
    '/tasks' : 'entrei na página de  task'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/explain'})
    res.end(rotas[req.url]);
})


server.listen(port, () =>{
    console.log(`Servidor escutando em http://localhost:${port}`);
})