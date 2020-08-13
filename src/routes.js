const routes = require('express').Router();

const RegisterUserControllers = require('./controllers/RegisterUserControllers');
const MusicDayControllers = require('./controllers/MusicDayControllers');
const GalaryControllers = require('./controllers/GalaryControllers');
const CalendarioControllers = require('./controllers/CalendarioControllers');
const uploadConfig = require('./database/uploadConfig');

routes.get('/',(req,res) => {return res.send('<audio controls src="/musicday"></audio>')})
routes.get('/user/listar', RegisterUserControllers.index);
routes.post('/user/cadastro', RegisterUserControllers.create);
routes.delete('/user/deletar', RegisterUserControllers.delete);
routes.get('/user/login/:email/:senha', RegisterUserControllers.login);

routes.get('/music/listar', MusicDayControllers.index);
routes.get('/music/cadastro/:nome',MusicDayControllers.create);
routes.post('/music/editar', MusicDayControllers.edit);

routes.post('/galary/cadastro', GalaryControllers.create);
routes.get('/galary/listar', GalaryControllers.index);
routes.delete('/galary/deletar/:id', GalaryControllers.delete);
routes.post('/galary/comentario', GalaryControllers.comment);

routes.post('/calendario/cadastro', CalendarioControllers.create);
routes.get('/calendario/listar', CalendarioControllers.index);
routes.delete('/calendario/deletar/:id', CalendarioControllers.delete);


module.exports = routes;

