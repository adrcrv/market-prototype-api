import fs from 'fs';
import path from 'path';
import { Sequelize, Op } from 'sequelize';

const config: object = require('./database');

const models: any = {};
const modelDir: string = path.join(__dirname, '../models');
const modelFiles: string[] = fs.readdirSync(modelDir);
const sequelize: any = new Sequelize(config);

function castDirectoryFiles(): string[] {
  return modelFiles.filter((file: string) => {
    const hasNotDot: boolean = file.indexOf('.') !== 0;
    const isNotBaseName: boolean = file !== modelDir;
    const isJsFormat: boolean = file.slice(-3) === '.ts';
    return hasNotDot && isNotBaseName && isJsFormat;
  });
}

async function dynamicModelImportHandler(file: string) {
  const { default: modelFile }: any = await import(path.join(modelDir, file));
  const model: any = modelFile(sequelize);
  models[model.name] = model;
}

function dynamicModelAssociateHandler(modelName: string) {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
}

// Dynamic Model Import
const castedDirectoryFiles: string[] = castDirectoryFiles();
castedDirectoryFiles.forEach(dynamicModelImportHandler);
const modelsKeys: string[] = Object.keys(models);
modelsKeys.forEach(dynamicModelAssociateHandler);

export {
  sequelize, Sequelize, Op, models,
};
