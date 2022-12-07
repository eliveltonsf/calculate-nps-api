import { User } from '../models/User';
import { AppDataSource } from './../data-source';

export const userRepository = AppDataSource.getRepository(User);
