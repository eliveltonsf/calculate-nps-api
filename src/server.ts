import { AppDataSource } from './data-source';
import express from 'express';

AppDataSource.initialize().then(() => {
  const app = express();

  app.listen(process.env.PORT, () => console.log('Server is running!'));
});
