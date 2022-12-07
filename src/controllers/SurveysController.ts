import { Request, Response } from 'express';
import { surveysRepository } from './../repositories/SurveysRepository';

class SurveysController {
  async create(request: Request, response: Response) {
    const { title, description } = request.body;

    try {
      const newSurvey = surveysRepository.create({
        title,
        description,
      });

      await surveysRepository.save(newSurvey);

      return response.status(201).json(newSurvey);
    } catch (error) {
      return response.status(500).json({ message: 'Internal Server Error!', error });
    }
  }

  async show(request: Request, response: Response) {
    const all = await surveysRepository.find();

    return response.json(all);
  }
}

export default SurveysController;
