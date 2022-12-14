import { AppError } from './../errors/AppError';
import { Request, Response } from 'express';
import surveysRepository from '../repositories/SurveysRepository';
import surveysUsersRepository from '../repositories/SurveysUsersRepository';
import userRepository from '../repositories/UserRepository';
import SendMailService from '../services/SendMailService';
import { resolve } from 'path';
import 'dotenv';

interface IVariable {
  name: string | undefined;
  title: string | undefined;
  description: string | undefined;
  id: string | undefined;
  link: string | undefined;
}

class SendMailController {
  async execute(request: Request, response: Response) {
    const { email, surveyId } = request.body;

    const dataUser = await userRepository.findOneBy({
      email,
    });

    if (!dataUser) {
      throw new AppError('User does not exists!');
    }

    const dataSurvey = await surveysRepository.findOneBy({ id: surveyId });

    if (!dataSurvey) {
      throw new AppError('Survey does not exists!');
    }

    const npsPath = resolve(__dirname, '..', 'views', 'emails', 'npsMail.hbs');

    const dataSurveyUsersExists = await surveysUsersRepository.findOneBy({ user: { id: dataUser.id } });
    const dataUsersSurveyExists = await surveysUsersRepository.findOneBy({ survey: { id: dataSurvey.id } });

    const variables: IVariable = {
      name: dataUser.name,
      title: dataSurvey.title,
      description: dataSurvey.description,
      id: '',
      link: process.env.URL_MAIL,
    };

    if (dataSurveyUsersExists && dataUsersSurveyExists) {
      variables.id = dataSurveyUsersExists?.id;
      await SendMailService.execute(email, dataSurvey.title, variables, npsPath);
      return response.json(dataUsersSurveyExists);
    }

    const surveyUser = surveysUsersRepository.create({
      user: dataUser.id,
      survey: surveyId,
    });

    await surveysUsersRepository.save(surveyUser);

    variables.id = surveyUser.id;

    await SendMailService.execute(email, dataSurvey.title, variables, npsPath);

    return response.json(surveyUser);
  }

  async show(request: Request, response: Response) {
    const all = await surveysUsersRepository.find();

    return response.json(all);
  }
}

export default SendMailController;
