import './config/dotenv.config';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './database/config/db-connection';
import ClientRouter from './app/router/client.router';
import ProductRouter from './app/router/product.router';

class App {
  private app: Application = express();
  private port: number | string = process.env.PORT || 6540;

  public constructor() {
    this.bodyParserInjection();
    this.routerInjection();
    this.start();
  }

  private bodyParserInjection(): void {
    this.app.use(bodyParser.json());
  }

  private routerInjection(): void {
    ClientRouter.inject(this.app);
    ProductRouter.inject(this.app);
  }

  private start(): void {
    console.info('Running Database Connection Tests...');
    sequelize.authenticate().then(() => {
      this.app.listen(+this.port, () => {
        console.info(`App listening at http://localhost:${this.port}`);
      });
    });
  }
}

export default new App();
