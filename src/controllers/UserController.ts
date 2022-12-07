import { userRepository } from './../repositories/UserRepository';
import { Request, Response } from 'express';

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const userAlreadyExits = await userRepository.findOneBy({
      email,
    });

    if (userAlreadyExits) {
      return response.status(400).json({ message: 'User already exists!' });
    }

    if (!name) {
      return response.status(400).json({ message: 'O nome é obrigatório!' });
    }
    if (!email) {
      return response.status(400).json({ message: 'O email é obrigatório!' });
    }

    try {
      const newUser = userRepository.create({
        name,
        email,
      });

      await userRepository.save(newUser);

      return response.status(201).json(newUser);
    } catch (error) {
      return response.status(500).json({ message: 'Internal Server Error!', error });
    }
  }
}

export { UserController };
