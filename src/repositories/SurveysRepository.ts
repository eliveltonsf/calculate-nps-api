import { Surveys } from '../models/Surveys';
import { AppDataSource } from './../data-source';

export const surveysRepository = AppDataSource.getRepository(Surveys);
