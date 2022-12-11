import { Response, Request } from 'express';
import { IsNull, Not } from 'typeorm';

import surveysUsersRepository from '../repositories/SurveysUsersRepository';
class NpsController {
  async execute(request: Request, response: Response) {
    const { survey_id } = request.params;

    // const surveysUsers = await surveysUsersRepository.find({ survey: { id: survey_id } });

    const surveysUsers = await surveysUsersRepository.findBy({
      value: Not(IsNull()),
      survey: {
        id: survey_id,
      },
    });

    const detractor = surveysUsers.filter((survey) => survey.value && survey.value >= 0 && survey.value <= 6).length;
    const promoters = surveysUsers.filter((survey) => survey.value && survey.value >= 9 && survey.value <= 10).length;
    const passive = surveysUsers.filter((survey) => survey.value && survey.value >= 7 && survey.value <= 8).length;

    const totalAnswers = surveysUsers.length;

    const calculate = Number((((promoters - detractor) / totalAnswers) * 100).toFixed(2));

    return response.json({
      detractor,
      promoters,
      passive,
      totalAnswers,
      nps: calculate,
    });
  }
}

export default NpsController;
