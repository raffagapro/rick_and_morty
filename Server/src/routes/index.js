const express = require('express');
const myRouter = express.Router();
const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites');

myRouter.get("/character/:id", getCharById);
  
myRouter.get("/login", login);
  
myRouter.post("/fav", postFav);

myRouter.delete("/fav/:id", deleteFav);


module.exports = myRouter;