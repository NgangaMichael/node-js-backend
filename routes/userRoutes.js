const express = require('express');
const router = express.Router();
const userCTRL = require('../controller/userController');

router.get('/fetchingAllUsers', userCTRL.fetchingAllUsers);
router.get('/fetchingOneUser/:id', userCTRL.fetchingOneUser);
router.post('/createUser', userCTRL.createUser);
router.patch('/updateUser/:id', userCTRL.updateUser);
router.delete('/deleteUser/:id', userCTRL.deleteUser);

module.exports = router;