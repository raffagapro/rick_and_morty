const http = require('http');
const port = 3001;
const mockDB = require('./utils/data');

const server = http.createServer((req, res)=>{
    //logica del servidor
    res.setHeader('Access-Control-Allow-Origin', '*'); //CORS

    //RUTAS

    //RUTA PARA BUSCAR PERSONAJE CON ID
    if (req.url.includes('/rickandmorty/character')) {
        //LOGICA
        let urlArr = req.url.split('/');
        let id = parseInt(urlArr[urlArr.length - 1]);
        let foundCharacter = mockDB.find((char)=>char.id === id);
        //si se encontro el personaje
        if (foundCharacter) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(foundCharacter));
        }
        //no se encontro el personaje
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end(`No se encontro personaje con id:${id}`);
    }

    //CUALQUIER OTRA RUTA
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('Hola te he escuchado!!!');
});

server.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}/`);
    //logica que se ejecuta cuando el servidor se levanta
});