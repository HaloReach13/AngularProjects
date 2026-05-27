import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('todo_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});