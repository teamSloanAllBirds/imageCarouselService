/* eslint-disable */

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

describe('sample get request with jquery for the old school', () => {
  test('server has urls', () => {
    const callback = (data) => {
      try {
        expect(data.length).not.toBe(0);
        done();
      } catch (error) {
        done(error);
      }
    };
    $.get('/api/1', (data) => callback(data));
  });
});