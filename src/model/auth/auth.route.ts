import express from 'express';
import { login, register } from './auth.controller';
import { validate } from '../../utils';
import { loginSchema, registerSchema } from './auth.schema';

const router = express.Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);

export default router;
