import express from 'express';
import testController from './Controllers/testController';
import playerNameController from './Controllers/playerNameController';
import userController from './Controllers/userController';
import smsController from './Controllers/smsController';
import loginController from './Controllers/loginController';
const router = express.Router();
router.get('/test', testController.get);
router.get('/playernames', playerNameController.get);
router.post('/user', userController.post);
router.post('/login', loginController.post);
router.post('/sms', smsController.post);
export default router;
