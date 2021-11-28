import './config/dotenv.config';
import express from 'express';
import { sequelize } from './database/config/db-connection';
import router from './config/router.config';

const app: any = express();
const port: number = +process.env.PORT || 6540;

// Inject All Routers
router(app);

console.info('Running Database Connection Tests...');
sequelize.authenticate().then(() => {
  app.listen(port, () => {
    console.info(`App listening at http://localhost:${port}`);
  });
});
