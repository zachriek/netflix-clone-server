import { Request, Response } from 'express';

export const getMovies = (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Halo' });
};
