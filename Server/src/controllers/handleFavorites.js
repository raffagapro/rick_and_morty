let myFavorites = [];

function postFav(req, res){
    let character = req.body;
    myFavorites.push(character);
    console.log(myFavorites);
    return res.json(myFavorites);
}

function deleteFav(req, res){
    let { id } = req.params;
    console.log('antes', myFavorites);
    myFavorites = myFavorites.filter(char=>char.id !== id)
    console.log('despues', myFavorites);
    return res.json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
};