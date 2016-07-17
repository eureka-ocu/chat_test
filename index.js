import express from 'express';
import Sequelize from 'sequelize';
import config from './config/config';
import { createModels } from './models';

const env = process.env.NODE_ENV || 'development';
const appConfig = config[env];

const app = express();
const sequelize = new Sequelize(appConfig.database, appConfig.username, appConfig.password, appConfig);

app.set('view engine', 'jade');

app.set('models', createModels(sequelize, Sequelize));

app.get('/', (req, res) => {
  const { userModel } = app.get('models');
  userModel
    .create({
      name: "kentaro horie"
    })
    .then(() =>
      userModel
        .find({
          where: { name: 'kentaro horie' }
        })
        .then(foundUser =>
          res.render('index', { user: foundUser.name })
        )
    );
});

sequelize
  .sync()
  .then(() =>
    app.listen(8888, () => console.log('server start...'))
  );
