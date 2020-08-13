global.$ = require('jquery');
const server = require('../server/index.js');
const database = require('../server/database/index.js');
const axios = require('axios');

describe('database is configured correctly ', () => {
  test('database has fetching function', () => {
    expect(database.fetchURLs).toBeDefined();
  });
  test('database will fetch with a good id', () => {
    database.fetchURLs('1', (error, result) => {
      expect(error).toBe(null);
      expect(result).toBeDefined();
    })
  })
  test('database will not return empty with a bad id', () => {
    database.fetchURLs('notAValidId', (error, result) => {
      expect(result).toHaveLength(0);
    })
  })
})

describe('server is configured correctly ', () => {
  test('server has fetching function', () => {
    expect(server.app.get).toBeDefined();
  })
})

describe('server handles valid and invalid get request', () => {
  test('server returns urls for valid GET', () => {
      axios.get('/api/1').then(data => {
        expect(data.length).not.toBe(0);
      });
  });
  test('server throws error for invalid GET', () => {
      axios.get('/api/101').catch(error => {
        expect(error.length).not.toBe(0);
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