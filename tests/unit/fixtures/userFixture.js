export const createUserSuccess = {
  _id: '5cf7a5f56cd00f661a7da466',
  name: 'Peter',
  email: 'peter@example.com',
  createdAt: '2019-06-05T11:22:29.393Z',
  updatedAt: '2019-06-05T11:22:29.393Z',
  __v: 0
};

export const createUserError = {
  response: {
    data: {
      errors: {
        email: {
          message: 'Please use valid email',
          name: 'ValidatorError',
          properties: {
            message: 'Please use valid email',
            type: 'user defined',
            path: 'email',
            value: 'peter@ljfkfla',
            reason: {}
          },
          kind: 'user defined',
          path: 'email',
          value: 'peter@ljfkfla',
          reason: {}
        }
      },
      _message: 'User validation failed',
      message: 'User validation failed: email: Please use valid email',
      name: 'ValidationError'
    }
  }
};
