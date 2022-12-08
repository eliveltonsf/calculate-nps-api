import app from './app';
import { AppDataSource } from './data-source';

AppDataSource.initialize().then(() => {
  app.listen(process.env.PORT, () => console.log('Server is running!'));
});
