import express from 'express';
const router = express.Router();
import UserController from '../controller/userController.js';

router.get('/fetchingAllUsers', async (req, res) => {
    await UserController.fetchingAllUsers(req, res);
});

router.get('/fetchingOneUser/:id', async (req, res) => {
    await UserController.fetchingOneUser(req, res);
});

router.post('/createUser', async (req, res) => {
    await UserController.createUser(req, res);
});

router.patch('/updateUser/:id', async (req, res) => {
    await UserController.updateUser(req, res);
});

router.delete('/deleteUser/:id', async (req, res) => {
    await UserController.deleteUser(req, res);
});

export { router as userRoute };