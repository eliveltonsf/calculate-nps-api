import { Request, Response } from 'express';
import surveysRepository from '../repositories/SurveysRepository';
import surveysUsersRepository from '../repositories/SurveysUsersRepository';
import userRepository from '../repositories/UserRepository';
import SendMailService from '../services/SendMailService';
import { resolve } from 'path';
import 'dotenv';

class SendMailController {
  async execute(request: Request, response: Response) {
    const { email, surveyId } = request.body;

    const dataUser = await userRepository.findOneBy({
      email,
    });

    if (!dataUser) {
      return response.status(400).json({
        error: 'User does not exists!',
      });
    }

    const dataSurvey = await surveysRepository.findOneBy({ id: surveyId });

    if (!dataSurvey) {
      return response.status(400).json({
        error: 'Survey does not exists!',
      });
    }

    const variables = {
      name: dataUser.name,
      title: dataSurvey.title,
      description: dataSurvey.description,
      user_id: dataUser.id,
      link: process.env.URL_MAIL,
    };

    const npsPath = resolve(__dirname, '..', 'views', 'emails', 'npsMail.hbs');

    const dataSurveyUsersExists = await surveysUsersRepository.findOneBy({ user: { id: dataUser.id } });
    const dataUsersSurveyExists = await surveysUsersRepository.findOneBy({ survey: { id: dataSurvey.id } });

    if (dataSurveyUsersExists && dataUsersSurveyExists) {
      await SendMailService.execute(email, dataSurvey.title, variables, npsPath);
      return response.json(dataUsersSurveyExists);
    }

    const surveyUser = surveysUsersRepository.create({
      user: dataUser.id,
      survey: surveyId,
    });

    await surveysUsersRepository.save(surveyUser);

    await SendMailService.execute(email, dataSurvey.title, variables, npsPath);

    return response.json(surveyUser);
  }

  async show(request: Request, response: Response) {
    const all = await surveysUsersRepository.find();

    return response.json(all);
  }
}

export default SendMailController;
