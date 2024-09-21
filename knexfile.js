require("dotenv").config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,   
      user: process.env.DB_USER,       
      password: process.env.DB_PASSWORD, 
      host: process.env.DB_HOST,       
      port: process.env.DB_PORT,       
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/modals/migrations',  
      tableName: 'knex_migrations' 
    }
  },

};
