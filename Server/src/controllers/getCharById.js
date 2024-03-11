const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character';

async function getCharById(req, res){ 
    let { id } = req.params;
    try {
        //ejecuta este codigo
        //si todo esta bien
        //sigamos sin problemas

        let response = await axios.get(`${URL}/${id}`);
        let { 
            name,
            gender,
            species,
            origin,
            image,
            status
        } = response.data;

        //revisar si tenemos un personaje
        if (name) {
            //building our character obj
            let char={
                id,
                name,
                gender,
                species,
                origin: origin.name,
                image,
                status
            }
            return res.send(char);            
        }else return res.status(404).send({message:'Not Found!'});
    } catch (err) {
        //si hay un error
        //ignora el codigo de arriba
        //ejecuta esto
        console.log('TUVE UN ERROR', err);
        res.status(500).send({message:err.message});
    }
}

module.exports = getCharById;