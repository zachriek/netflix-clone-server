import { comparePassword, hashPassword } from '../../utils';
import { findUserByEmail, insertUser } from './auth.repository';

export const createUser = async (userData: { email: string; name: string; password: string }) => {
  const existingUser = await findUserByEmail(userData.email);
  if (existingUser) throw Error('Email taken');

  const hashedPassword = await hashPassword(userData.password);
  userData.password = hashedPassword;
  const user = await insertUser(userData);

  return user;
};

export const authorizeUser = async (userData: { email: string; password: string }) => {
  const user = await findUserByEmail(userData.email);
  if (!user) throw Error('Email does not exist');

  const isCorrectPassword = await comparePassword(userData.password, user.hashedPassword as string);
  if (!isCorrectPassword) throw Error('Incorrect password');

  return user;
};
