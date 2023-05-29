import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const insertUser = async (userData: { email: string; name: string; password: string }) => {
  const user = await prisma.user.create({
    data: {
      email: userData.email,
      name: userData.name,
      hashedPassword: userData.password,
      image: '',
      emailVerified: new Date(),
    },
  });
  return user;
};

export const findUserByEmail = async (email: string) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return existingUser;
};
