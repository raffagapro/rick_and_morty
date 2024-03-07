const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character';

function getCharById(req, res){ 
    let { id } = req.params;
    axios.get(`${URL}/${id}`)
    .then(response =>{
        //deconstruction
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
    })
    .catch(err=>{
        console.log('TUVE UN ERROR', err);
        res.status(500).send({message:err.message});
    });
}

module.exports = getCharById;