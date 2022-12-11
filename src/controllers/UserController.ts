import { AppError } from './../errors/AppError';
import { Request, Response } from 'express';
import userRepository from './../repositories/UserRepository';
import * as yup from 'yup';

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const schema = yup.object({
      name: yup.string().required(),
      email: yup.string().email().required(),
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err });
    }

    const userAlreadyExits = await userRepository.findOneBy({
      email,
    });

    if (userAlreadyExits) {
      throw new AppError('User already exists!');
    }

    if (!name) {
      throw new AppError('O nome é obrigatório!');
    }
    if (!email) {
      throw new AppError('O email é obrigatório!');
    }

    const newUser = userRepository.create({
      name,
      email,
    });

    await userRepository.save(newUser);

    return response.status(201).json(newUser);
  }

  async show(request: Request, response: Response) {
    const all = await userRepository.find();

    return response.json(all);
  }
}

export default UserController;
