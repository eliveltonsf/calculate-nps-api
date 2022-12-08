import { Request, Response } from 'express';
import surveysRepository from '../repositories/SurveysRepository';
import surveysUsersRepository from '../repositories/SurveysUsersRepository';
import userRepository from '../repositories/UserRepository';

class SendMailController {
  async execute(request: Request, response: Response) {
    const { email, surveyId } = request.body;

    console.log({ surveyId });

    const userAlreadyExits = await userRepository.findOneBy({
      email,
    });

    console.log(userAlreadyExits);

    if (!userAlreadyExits) {
      return response.status(400).json({
        error: 'User does not exists!',
      });
    }

    const surveyAlreadyExists = await surveysRepository.findOneBy({ id: surveyId });

    console.log(surveyAlreadyExists);

    if (!surveyAlreadyExists) {
      return response.status(400).json({
        error: 'Survey does not exists!',
      });
    }

    const surveyUser = surveysUsersRepository.create({
      user: userAlreadyExits.id,
      survey: surveyId,
    });
    await surveysUsersRepository.save(surveyUser);

    return response.json(surveyUser);
  }

  async show(request: Request, response: Response) {
    const all = await surveysUsersRepository.find();

    return response.json(all);
  }
}

export default SendMailController;
