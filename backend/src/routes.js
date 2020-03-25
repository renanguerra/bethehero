const express = require('express')
const ongControllers = require('./controllers/ongControllers')
const incidentsControllers = require('./controllers/incidentsControllers')
const profileControllers = require('./controllers/profileControllers')
const sessionControllers = require ('./controllers/sessionControllers')


const routes = express.Router();

routes.get('/users', ongControllers.index);
routes.post('/users', ongControllers.create);

routes.get('/profile',profileControllers.index)

routes.post('/profile',sessionControllers.create)

routes.get('/casos', incidentsControllers.index);
routes.post('/casos', incidentsControllers.create);
routes.delete('/casos/:id', incidentsControllers.delete)

routes.post('/login',sessionControllers.create)

module.exports = routes;