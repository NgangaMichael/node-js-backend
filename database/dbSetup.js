import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const databaseConfig = {
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
};

class DatabaseConnection {
  constructor() {
    this.sequelize = new Sequelize(databaseConfig);
  }

  async connect() {
    try {
      await this.sequelize.authenticate();
      console.log('Connected to PostgreSQL');
    } catch (err) {
      console.error('Error connecting to PostgreSQL', err);
    }
  }
}

export default DatabaseConnection;
