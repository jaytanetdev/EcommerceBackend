import { Request, Response } from "express";
import {
  createProduct,
  deleteProduct,
  fetchAllProduct,
  fetchProductById,
  updateProduct,
} from "../services/product-service";

export const create = async (req: Request, res: Response) => {
  try {
    const newProduct = await createProduct(req.body);
    res.status(201).json({ message: "created successfully", newProduct });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const product = await fetchAllProduct();
    res.status(200).json(product);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const product = await fetchProductById(id);
    res.status(200).json(product);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const updatedProduct = await updateProduct(id, req.body);
    res.status(200).json({ msg: "update success", updatedProduct });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deletedProduct = await deleteProduct(id);
    res.status(200).json({ msg: "delete success", deletedProduct });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
