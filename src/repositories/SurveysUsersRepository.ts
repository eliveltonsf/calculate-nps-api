import SurveysUser from '../models/SurveysUser';
import { AppDataSource } from './../data-source';

const surveysUsersRepository = AppDataSource.getRepository(SurveysUser);

export default surveysUsersRepository;
