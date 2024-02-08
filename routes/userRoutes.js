import express from 'express';
const router = express.Router();
import * as userCTRL from '../controller/userController.js'

router.get('/fetchingAllUsers', userCTRL.fetchingAllUsers);
router.get('/fetchingOneUser/:id', userCTRL.fetchingOneUser);
router.post('/createUser', userCTRL.createUser);
router.patch('/updateUser/:id', userCTRL.updateUser);
router.delete('/deleteUser/:id', userCTRL.deleteUser);

export { router as userRoute };