import { DataTypes, Model } from 'sequelize';
import DatabaseConnection from '../database/dbSetup.js';

const db = new DatabaseConnection();

class User extends Model {}

User.init(
  {
    username: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    country: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false, // Ensure that email cannot be null
      unique: true, // Ensure that email is unique
    },
  },
  {
    sequelize: db.sequelize,
    modelName: 'User', // Specify the model name explicitly
  }
);

export default User;
