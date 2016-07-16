module.exports = {
  development: {
    username: process.env.DEV_USER_NAME,
    password: JSON.parse(process.env.DEV_PASSWORD),
    database: process.env.DEV_DATABASE,
    host: process.env.DEV_HOST,
    dialect: 'mysql'
  },
  test: {
    username: process.env.TEST_USER_NAME,
    password: JSON.parse(process.env.TEST_PASSWORD),
    database: process.env.TEST_DATABASE,
    host: process.env.TEST_HOST,
    dialect: 'mysql'
  },
  production: {
    username: process.env.PROD_USER_NAME,
    password: JSON.parse(process.env.PROD_PASSWORD),
    database: process.env.PROD_DATABASE,
    host: process.env.PROD_HOST,
    dialect: 'mysql'
  }
};
