const jsonMethod: object = jest.fn();
const statusMethod: object = jest.fn(() => ({ json: jsonMethod }));

const express: object = {
  req: {},
  res: {
    status: statusMethod,
    json: jsonMethod,
  },
};

export default express;
