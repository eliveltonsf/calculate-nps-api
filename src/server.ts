import { AppDataSource } from './data-source';
import express from 'express';

AppDataSource.initialize().then(() => {
  const app = express();

  app.listen(3333, () => console.log('Server is running!'));
});
