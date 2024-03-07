const express = require('express');
const myRouter = require('./routes');
const server = express();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 
const PORT = 3001;

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
 });




// const http = require('http');
// const getCharById = require('./controllers/getCharById');

// const port = 3001;
// const mockDB = require('./utils/data');


// const server = http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // LA RESPONSABILIDAD DE ESTE CODIGO ES CREAR RUTAS!!!

//     if (req.url.includes('/rickandmorty/character')) {
//         const id = parseInt(req.url.split('/').pop())
//         return getCharById(res, id); //show them how to optimized it
//     }

//     res.writeHead(200, { 'Content-Type': 'text/plain'});
//     return res.end('Hello, Henrry!')
// });

// server.listen(port, ()=>{
//     console.log(`Server is running on http://localhost:${port}/`);
// });