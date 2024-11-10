import { db, Prisma } from "../../prisma/prismaClient";
const jwt = require("jsonwebtoken");

export const createUser = async (data: Prisma.usersCreateInput) => {
  try {
    const newUser = await db.users.create({
      data: data,
    });
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    const data = await db.users.findFirst({
      select: {
        user_id: true,
        first_name: true,
        last_name: true,
        username: true,
        profile_image: true,
        permission: true,
      },
      where: {
        username: username,
        password: password,
      },
    });
    const token = generateToken(data);
    const response = { token: token, data: data };
    return data ? [response] : [];
  } catch (error) {
    throw error;
  }
};
export const fetchAllUsers = async () => {
  try {
    const data = await db.users.findMany();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchUsersById = async (id: string) => {
  const userId = parseInt(id);
  try {
    const data = await db.users.findUnique({
      where: { user_id: userId },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id: string, data: Prisma.usersUpdateInput) => {
  try {
    const userId = parseInt(id);
    const updatedUser = await db.users.update({
      where: { user_id: userId },
      data,
    });
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const userId = parseInt(id);
    const deletedUser = await db.users.delete({
      where: { user_id: userId },
    });
    return deletedUser;
  } catch (error) {
    throw error;
  }
};

export function generateToken(dataUser: any) {
  const token = jwt.sign(dataUser, process.env.JWT_SECRET_KEY, {
    expiresIn: "24h",
  });

  return token;
}
