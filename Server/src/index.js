const http = require('http');
const mockDB = require('./utils/data');
const port = 3001;

const server = http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes('/rickandmorty/character')) {
        // console.log(foundChar);
        let urlArr = req.url.split('/');
        let id = +urlArr[urlArr.length - 1];
        let foundChar = mockDB.find((char)=>char.id === id);

        //Si se encontro el personaje mandar como JSON
        if (foundChar) {
            res.writeHead(200, { 'Content-Type': 'text/plain'});
            return res.end(JSON.stringify(foundChar));
        }
        //SI no mandar mensaje
        res.writeHead(200, { 'Content-Type': 'application/json'});
        return res.end(`No se encontro personaje con id:${id}`)
    }

    res.writeHead(200, { 'Content-Type': 'text/plain'});
    return res.end('Hello, Henrry!')
});

server.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}/`);
});