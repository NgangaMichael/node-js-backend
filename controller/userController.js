import User from '../models/userModel.js';

class UserController {
    async createUser(req, res) {
        try {
            const { username, age, gender, country, email } = req.body;
            const newUser = new User({ username, age, gender, country, email });
            await newUser.save();
            res.status(200).send({ message: 'New user created Successfully' });
        } catch (error) {
            res.status(404).send({ message: 'Error creating user', error });
        }
    }

    async fetchingAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.status(404).send({ message: 'Error fetching all users', error });
        }
    }

    async fetchingOneUser(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findById(id);
            res.json(user);
        } catch (error) {
            res.status(404).send({ message: 'Error fetching one user', error });
        }
    }

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { username, age, gender, country, email } = req.body;
            await User.findByIdAndUpdate(id, { username, age, gender, country, email });
            res.status(200).send({ message: 'User Updated Successfully' });
        } catch (error) {
            res.status(404).send({ message: 'Error updating user', error });
        }
    }

    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            await User.findByIdAndDelete(id);
            res.status(200).send({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(404).send({ message: 'Error deleting user', error });
        }
    }
}

export default new UserController();