import { Router } from 'express';
import SurveysController from '../controllers/SurveysController';
import { UserController } from '../controllers/UserController';

const routes = Router();

routes.post('/users', new UserController().create);

routes.post('/surveys', new SurveysController().create);
routes.get('/surveys', new SurveysController().show);

export default routes;
