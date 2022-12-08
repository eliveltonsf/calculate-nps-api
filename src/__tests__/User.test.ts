import { AppDataSource } from './../data-source';
import request from 'supertest';
import app from '../app';

describe('Users', () => {
  beforeAll(() => {
    return AppDataSource.initialize().then(async () => {
      await AppDataSource.runMigrations();
    });
  });

  it('Should be able to create a new user', async () => {
    const response = await request(app).post('/users').send({
      email: 'user@gmail.com',
      name: 'User Example',
    });

    expect(response.status).toBe(201);
  });

  it('Should note be able to create a user with exists email', async () => {
    const response = await request(app).post('/users').send({
      email: 'user@gmail.com',
      name: 'User Example',
    });

    expect(response.status).toBe(400);
  });
});
