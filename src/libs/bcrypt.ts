import bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  return hashedPassword;
};

export const comparePassword = async (password: string, hashedPassword: string) => {
  const isCorrectPassword = await bcrypt.compare(password, hashedPassword);
  return isCorrectPassword;
};
