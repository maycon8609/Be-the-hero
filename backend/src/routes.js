const express = require('express');
const routes = express.Router();

const auth = require('./middleware/auth');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.get('/ongs', OngController.index);
routes.post('/ongs', auth.createOng, OngController.store);

routes.get('/incidents', auth.listIncidents, IncidentController.index);
routes.post('/incident',auth.createIncidentBody, auth.createIncidentAuth, IncidentController.create);
routes.delete('/incident/:id', auth.deleteIncidentParams, auth.deleteIncidentHeaders, IncidentController.delete);

routes.get('/profile', auth.listProfile, ProfileController.index);

routes.post('/session', auth.createSession, SessionController.create);

module.exports = routes;
