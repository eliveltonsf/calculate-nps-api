import { AppError } from './../errors/AppError';
import { Request, Response } from 'express';
import surveysUsersRepository from '../repositories/SurveysUsersRepository';
import SurveysUsersRepository from '../repositories/SurveysUsersRepository';

class AnswerController {
  async execute(request: Request, response: Response) {
    const { value } = request.params;
    const { u } = request.query;

    const surveyUser = await SurveysUsersRepository.findOneBy({
      id: String(u),
    });

    if (!surveyUser) {
      throw new AppError('Survey User does not exists!');
    }

    surveyUser.value = Number(value);

    await surveysUsersRepository.save(surveyUser);

    return response.json(surveyUser);
  }
}

export default AnswerController;
