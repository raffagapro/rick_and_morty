const http = require('http');
const getCharById = require('./controllers/getCharById');
const port = 3001;

const server = http.createServer((req, res)=>{
    //logica del servidor
    res.setHeader('Access-Control-Allow-Origin', '*'); //CORS

    //RESPONSABILIDAD UNICA ES CREAR RUTAS, NO CONTENER LOGICA!!!

    //RUTA PARA BUSCAR PERSONAJE CON ID
    if (req.url.includes('/rickandmorty/character')) {
        //POR QUE LOGICA DE OBTENER EL ID SE MANEJA AQUI????
        return getCharById(req, res);
    }

    //CUALQUIER OTRA RUTA
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('Hola te he escuchado!!!');
});

server.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}/`);
    //logica que se ejecuta cuando el servidor se levanta
});