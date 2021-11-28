import './config/dotenv.config';
import express, { Application } from 'express';
import { sequelize } from './database/config/db-connection';
import ClientRouter from './app/router/client.router';

class App {
  private app: Application = express();
  private port: number = +process.env.PORT || 6540;

  public constructor() {
    this.routerInjection();
    this.start();
  }

  private routerInjection() {
    ClientRouter.inject(this.app);
  }

  private start(): void {
    console.info('Running Database Connection Tests...');
    sequelize.authenticate().then(() => {
      this.app.listen(this.port, () => {
        console.info(`App listening at http://localhost:${this.port}`);
      });
    });
  }
}

export default new App();
