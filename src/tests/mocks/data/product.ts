import { Product } from '../../../app/interface/product';

export const productMock1: Product = {
  id: 1,
  name: 'Kit Primero Socorros',
  color: 'N/A',
  size: '6x9 cm',
  price: 99.99,
  createdAt: new Date('2021-11-28T03:00:49.096Z'),
  updatedAt: new Date('2021-11-28T03:00:49.096Z'),
};

export const productMock2: Product = {
  id: 2,
  name: 'Pato de Borracha',
  color: 'Amarelo',
  size: '15x8 cm',
  price: 29.99,
  createdAt: new Date('2021-11-28T03:00:49.096Z'),
  updatedAt: new Date('2021-11-28T03:00:49.096Z'),
};
