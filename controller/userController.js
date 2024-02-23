import User from '../models/userModel.js';

class UserController {
  async createUser(req, res) {
    try {
      const { username, age, gender, country, email } = req.body;
      const newUser = await User.create({ username, age, gender, country, email });
      res.status(201).send({ message: 'New user created Successfully', newUser });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error creating user', error });
    }
  }

  async fetchingAllUsers(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error fetching all users', error });
    }
  }

  async fetchingOneUser(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error fetching one user', error });
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { username, age, gender, country, email } = req.body;
      await User.update({ username, age, gender, country, email }, { where: { id } });
      res.status(200).send({ message: 'User Updated Successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error updating user', error });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await User.destroy({ where: { id } });
      res.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error deleting user', error });
    }
  }
}

export default new UserController();
