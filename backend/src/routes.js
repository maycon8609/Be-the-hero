const express = require('express');

const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/incident', IncidentController.index);
routes.post('/incident', IncidentController.create);
routes.delete('/incident/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create);

module.exports = routes;
