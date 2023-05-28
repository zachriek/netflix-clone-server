import { AnyZodObject, ZodError } from 'zod';
import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  return hashedPassword;
};

export const comparePassword = async (password: string, hashedPassword: string) => {
  const isCorrectPassword = await bcrypt.compare(password, hashedPassword);
  return isCorrectPassword;
};

export const validate = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (err) {
    if (err instanceof ZodError) {
      const errors = err.errors.map((e) => ({
        [e.path[1]]: `${e.path[1]} ${e.path[0] === 'body' ? 'field' : e.path[0]} is ${e.message.toLowerCase()}`,
      }));
      return res.status(400).json({ errors });
    }
  }
};
