import { Client } from '../../database/entities/client';
import ClientRepository from '../repository/client.repository';

export default class ClientService {
  private clientRepository: ClientRepository;

  constructor() {
    this.clientRepository = new ClientRepository();
  }

  public findAll(): Client[] {
    return this.clientRepository.findAll();
  }
}
