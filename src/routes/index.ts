import { Router } from 'express';
import SurveysController from '../controllers/SurveysController';
import UserController from '../controllers/UserController';
import SendMailController from '../controllers/SendMailController';

const routes = Router();

routes.post('/users', new UserController().create);
routes.get('/users', new UserController().show);

routes.post('/surveys', new SurveysController().create);
routes.get('/surveys', new SurveysController().show);

routes.post('/sendMail', new SendMailController().execute);
routes.get('/sendMail', new SendMailController().show);

export default routes;
