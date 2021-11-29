import { db } from '../../database/config/db-connection';
import { Client } from '../interface/client';

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

  public async updateById(id: number | string, client: Client): Promise<Client | null> {
    const response = await this.client.update(client, { where: { id }, returning: true });
    const [rows, data] = response;
    return rows ? data[0] : null;
  }

  public async deleteById(id: number | string): Promise<number | null> {
    const rows = await this.client.destroy({ where: { id } });
    return rows || null;
  }
}
