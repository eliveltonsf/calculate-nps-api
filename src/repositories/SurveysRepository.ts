import Survey from '../models/Survey';
import { AppDataSource } from './../data-source';

const surveysRepository = AppDataSource.getRepository(Survey);

export default surveysRepository;
