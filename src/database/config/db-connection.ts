import fs from 'fs';
import path from 'path';
import { Sequelize, Op } from 'sequelize';

const config = require('./database');

class DbConnection {
  private modelDir: string;
  private modelFiles: string[];

  public db: any = {};
  public sequelize: any;

  public constructor() {
    this.db = {};
    this.modelDir = path.join(__dirname, '../models');
    this.modelFiles = fs.readdirSync(this.modelDir);
    this.sequelize = new Sequelize(config);
    this.dynamicModelImport();
  }

  private dynamicModelImport() {
    const castedDirectoryFiles: string[] = this.castDirectoryFiles();
    castedDirectoryFiles.forEach(this.dynamicModelImportHandler.bind(this));
    const modelsKeys: string[] = Object.keys(this.db);
    modelsKeys.forEach(this.dynamicModelAssociateHandler);
  }

  private castDirectoryFiles(): string[] {
    return this.modelFiles.filter((file: string) => {
      const hasNotDot: boolean = file.indexOf('.') !== 0;
      const isNotBaseName: boolean = file !== this.modelDir;
      const fileFormat = file.slice(-3);
      const isTsFormat: boolean = fileFormat === '.ts';
      const isJsFormat: boolean = fileFormat === '.js';
      const isTsOrJsFormat: boolean = isTsFormat || isJsFormat;
      return hasNotDot && isNotBaseName && isTsOrJsFormat;
    });
  }

  private async dynamicModelImportHandler(file: string) {
    const { default: modelFile }: any = await import(path.join(this.modelDir, file));
    const model: any = modelFile(this.sequelize);
    this.db[model.name] = model;
  }

  private dynamicModelAssociateHandler(modelName: string) {
    if (this.db[modelName].associate) {
      this.db[modelName].associate(this.db);
    }
  }
}

const { db, sequelize } = new DbConnection();
export { db, sequelize, Sequelize, Op };
