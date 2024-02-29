const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character';

function getCharById(req, res){ 
    //logica para sacar el ID de req
    const id = parseInt(req.url.split('/').pop());

    //codigo async
    axios.get(`${URL}/${id}`) //espera aqui a que esto se resuelva
    .then((response)=>{
        let { name, gender, species, origin, image , status } = response.data
        let char={
            id,
            name, //tome la var como nombre de propiedad y valor
            gender,
            species,
            origin: origin.name,
            image,
            status
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(char));
    })
    .catch((err)=>{
        // console.log(err.message);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end(err.message);
    });
}

// getCharById('algo', 639);

module.exports = getCharById;