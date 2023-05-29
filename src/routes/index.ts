import express from 'express';
import userRoute from '../model/user/user.route';

const router = express.Router();

router.use('/auth', userRoute);

export default router;
