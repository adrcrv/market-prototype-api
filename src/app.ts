import express from 'express';
import { sequelize } from './database/config/db-connection';

const app: any = express();
const port: number = 6540;

console.info('Running Database Connection Tests...');
sequelize.authenticate().then(() => {
  app.listen(port, () => {
    console.info(`App listening at http://localhost:${port}`);
  });
});
