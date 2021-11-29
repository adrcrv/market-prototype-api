import { db } from '../../database/config/db-connection';
import { Client } from '../../database/entities/client';

export default class ClientRepository {
  private client: any;

  public constructor() {
    this.client = db.Client;
  }

  public findAll(): Client[] {
    return this.client.findAll();
  }

  public findById(id: number): Client {
    return this.client.findOne({ where: { id } });
  }

  public create(client: Client): Client {
    return this.client.create(client);
  }
}
