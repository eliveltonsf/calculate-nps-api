import request from 'supertest';
import app from '../app';
import { AppDataSource } from './../data-source';

describe('Surveys', () => {
  beforeAll(() => {
    return AppDataSource.initialize().then(async () => {
      await AppDataSource.runMigrations();
    });
  });

  it('Should be able to create a new user', async () => {
    const response = await request(app).post('/surveys').send({
      title: 'Title Example',
      description: 'Description Example',
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should be able to get all surveys', async () => {
    await request(app).post('/surveys').send({
      title: 'Title Example',
      description: 'Description Example',
    });

    const response = await request(app).get('/surveys');

    expect(response.body.length).toBe(2);
  });
});
