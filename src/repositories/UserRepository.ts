import { User } from './../database/entities/User';
import { AppDataSource } from './../data-source';

export const userRepository = AppDataSource.getRepository(User);
