import express from 'express';
import { login, register } from './user.controller';
import { validate } from '../../libs/zod';
import { loginSchema, registerSchema } from './user.schema';

const router = express.Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);

export default router;
