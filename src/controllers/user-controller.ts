import { Request, Response } from "express";
import {
  createUser,
  deleteUser,
  fetchAllUsers,
  fetchUsersById,
  loginUser,
  updateUser,
} from "../services/user-service";
import { CRequest } from "../interfaces/custom-request";

export const create = async (req: Request, res: Response) => {
  try {
    const newUser = await createUser(req.body);
    res.status(201).json({ message: "created successfully", newUser });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllUsers = async (req: CRequest, res: Response) => {
  try {
    console.log(req.user);
    const users = await fetchAllUsers();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getUesrLoign = async (req: Request, res: Response) => {
  const username = req.params.username;
  const password = req.params.password;
  try {
    const users = await loginUser(username, password);
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
export const getUsersById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const users = await fetchUsersById(id);
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const updatedUser = await updateUser(id, req.body);
    res.status(200).json({ msg: "update success", updatedUser });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deletedUser = await deleteUser(id);
    res.status(200).json({ msg: "delete success", deletedUser });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
