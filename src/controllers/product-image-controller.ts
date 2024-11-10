import { Request, Response } from "express";
import {
  createProductImg,
  deleteProductImg,
  fetchAllProductImg,
  fetchProductImgById,
  updateProductImg,
} from "../services/product-image-service";
import { CRequest } from "../interfaces/custom-request";
import fs from 'fs';
import path from 'path';




export const create = async (req: Request, res: Response) => {
  try {
    const newProductImg = await createProductImg(req.body);
    res.status(201).json({ message: "created successfully", newProductImg });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};


export const upload = async (req: CRequest, res: Response) => {
  const uploadDir = path.join(__dirname,'..', 'uploads'); // ตั้งค่าที่เก็บไฟล์
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true }); // สร้างไดเรกทอรีถ้าไม่มี
  }
  try {
    if (req.files != undefined) {
      const myFile = req.files.myFile;

      const fileName = myFile.name;

      // rename file
      const fileExtension = fileName.split(".").pop();
      const newFileName = new Date().getTime() + "." + fileExtension;
      const filePath = path.join(uploadDir, newFileName);

      // save file
      myFile.mv(filePath, async (err: any) => {
        if (err) {
          return res.status(500).send({ error: err.message }); // ใช้ return เพื่อหยุดการทำงาน
        }

        res.send({ message: "success", fileName: newFileName });
      });
    } else {
      res.status(500).send({ error: "No file uploaded" });
    }
  } catch (e: any) {
    res.status(500).send({ error: e.message });
  }
};

export const getAllProductImg = async (req: Request, res: Response) => {
  try {
    const productImg = await fetchAllProductImg();
    res.status(200).json(productImg);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductImgById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const productImg = await fetchProductImgById(id);
    res.status(200).json(productImg);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const updatedProductImg = await updateProductImg(id, req.body);
    res.status(200).json({ msg: "update success", updatedProductImg });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deletedProductImg = await deleteProductImg(id);
    res.status(200).json({ msg: "delete success", deletedProductImg });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
