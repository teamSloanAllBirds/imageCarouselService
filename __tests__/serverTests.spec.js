const app = require('../server/index.js');
const axios = require('axios');

describe('sample get request', () => {
  test('server has urls', () => {
    const callback = (data) => {
      try {
        expect(data.length).not.toBe(0);
        done();
      } catch (error) {
        done(error);
      }
    };
    axios({
      type: 'GET',
      url: '/api/1',
      success: (data) => {
        callback(data);
      }
    });
  });
});