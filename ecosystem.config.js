module.exports = {
  apps: [{
    name: 'R-Processor',
    script: 'index.js',
    instances: 'max',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }],
  deploy: {
    production: {
      user: 'node',
      host: '212.83.163.1',
    },
  },
};
