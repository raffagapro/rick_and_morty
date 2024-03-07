const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character';


function getCharById(res, id) {
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
        return res.end(JSON.stringify(char));
    })
    .catch(err=>{
        // console.log(err.message);
        // console.log('hay un error');
        res.writeHead(500, { 'Content-Type': 'text/plain'});
        res.end(err.message);
    });
}

// const fakeRes = {
//     send:(char)=>console.log(char),
//     status:(status)=>console.log(status)
// }

// getCharById(fakeRes, 34);

module.exports = getCharById;