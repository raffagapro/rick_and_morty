const express = require('express');
const getCharById = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const login = require("../controllers/login");

const myRouter = express.Router();

myRouter.get('/character/:id', getCharById);

myRouter.get('/login', login);

myRouter.post('/fav', postFav);

myRouter.delete('/fav/:id', deleteFav);

module.exports = myRouter;