// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/echopark',
    useNullAsDefault: true,
    migrations: {
      directory: __dirname + '/database/migrations'
    },
    seeds: {
      directory: __dirname + '/database/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: 'postgres://localhost/echopark',
    useNullAsDefault: true,
    migrations: {
      directory: __dirname + '/database/migrations'
    },
    seeds: {
      directory: __dirname + '/database/seeds'
    }
  }
};
