import express from 'express';
import testController from './Controllers/testController';
import playerNameController from './Controllers/playerNameController';
const router = express.Router();
router.get('/test', testController.get);
router.get('/playernames', playerNameController.get);
export default router;
