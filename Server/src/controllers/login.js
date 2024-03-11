const users = require('../utils/users');

function login(req, res){
    let { password, email } = req.query;
    let foundUser = users.find(user=> user.email === email);
    //si se encontro un usuario
    if (foundUser) {
        //revisar que el PW sea correcto
        if (foundUser.password === password) return res.send({access:true});
        else return res.send({access:false});
    } else res.send({access:false});
}

module.exports = login;