// userController.js
import User from '../models/userModel.js';

export const createUser = async (req, res) => {
    try {
        const { username, age, gender, country, email } = req.body;
        const newUser = new User({ username, age, gender, country, email });
        await newUser.save();
        res.status(200).send({ message: 'New user created Successfully' });
    } catch (error) {
        res.status(404).send({ message: 'Error creating user', error });
    }
};

export const fetchingAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(404).send({ message: 'Error fetching all users', error });
    }
};

export const fetchingOneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.json(user);
    } catch (error) {
        res.status(404).send({ message: 'Error fetching one user', error });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, age, gender, country, email } = req.body;
        await User.findByIdAndUpdate(id, { username, age, gender, country, email });
        res.status(200).send({ message: 'User Updated Successfully' });
    } catch (error) {
        res.status(404).send({ message: 'Error updating user', error });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(404).send({ message: 'Error deleting user', error });
    }
};
