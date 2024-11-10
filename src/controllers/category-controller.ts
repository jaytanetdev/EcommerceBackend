import { Request, Response } from "express";
import {
  createCategory,
  deleteCategory,
  fetchAllCategory,
  fetchCategoryById,
  fetchCatProductById,
  updateCategory,
} from "../services/category-service";

export const create = async (req: Request, res: Response) => {
  try {
    const newCategory = await createCategory(req.body);
    res.status(201).json({ message: "created successfully", newCategory });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllCategory = async (req: Request, res: Response) => {
  try {
    const category = await fetchAllCategory();
    res.status(200).json(category);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const category = await fetchCategoryById(id);
    res.status(200).json(category);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const updatedCategory = await updateCategory(id, req.body);
    res.status(200).json({ msg: "update success", updatedCategory });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deletedCategory = await deleteCategory(id);
    res.status(200).json({ msg: "delete success", deletedCategory });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getCategoryProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const data = await fetchCatProductById(id);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
