const api = {
  default: {
    logger: {
      level: 'info'
    }
  },
  dev: {
    protocol: 'http://',
    host: 'localhost',
    port: 8100,
    endpoint_prefix: '',
  },
  development: {
    protocol: 'http://',
    host: 'localhost',
    port: 8100,
    endpoint_prefix: '',
    logger: {
      level: 'info'
    }
  },
  production: {
    protocol: 'http://',
    host: 'nyc.bhelmer.com',
    port: '80',
    endpoint_prefix: '/api',
    logger: {
      level: 'info'
    }
  },
};

module.exports = api;
