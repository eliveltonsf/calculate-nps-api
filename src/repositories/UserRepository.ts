import User from '../models/User';
import { AppDataSource } from './../data-source';

const userRepository = AppDataSource.getRepository(User);

export default userRepository;
