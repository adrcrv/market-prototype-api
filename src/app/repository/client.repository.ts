import { db } from '../../database/config/db-connection';
import { Client } from '../../database/entities/client';

export default class ClientRepository {
  private client;

  public constructor() {
    this.client = db.Client;
  }

  public findAll(): Client[] {
    return this.client.findAll();
  }
}
