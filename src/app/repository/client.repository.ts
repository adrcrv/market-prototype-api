import { db } from '../../database/config/db-connection';
import { Client } from '../../database/entities/client';

export default class ClientRepository {
  private ClientModel;

  constructor() {
    this.ClientModel = db.Client;
  }

  public findAll(): Client[] {
    return this.ClientModel.findAll();
  }
}
