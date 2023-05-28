import { Request, Response } from 'express';
import { authorizeUser, createUser } from './auth.service';

export const register = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    res.status(200).json({
      data: {
        name: user.name,
        email: user.email,
      },
      message: 'User succesfull register',
    });
  } catch (err: any) {
    res.status(400).json({ error: `Someting went wrong: ${err.message}` });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user = await authorizeUser(req.body);
    res.status(200).json({
      data: {
        name: user.name,
        email: user.email,
      },
      message: 'User succesfull login',
    });
  } catch (err: any) {
    res.status(400).json({ error: `Someting went wrong: ${err.message}` });
  }
};
