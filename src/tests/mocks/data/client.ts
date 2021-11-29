import { Client } from '../../../app/interface/client';

export const clientMock1: Client = {
  id: 1,
  name: 'Mock Name',
  email: 'email@example.com',
  gender: 'male',
  legalId: '999.999.999-99',
  createdAt: new Date('2021-11-28T03:00:49.096Z'),
  updatedAt: new Date('2021-11-28T03:00:49.096Z'),
};

export const clientMock2: Client = {
  id: 2,
  name: 'Another Mock Name',
  email: 'another-email@example.com',
  gender: 'female',
  legalId: '888.888.888-88',
  createdAt: new Date('2021-11-28T03:00:49.096Z'),
  updatedAt: new Date('2021-11-28T03:00:49.096Z'),
};
