import { db, Prisma } from "../../prisma/prismaClient";

export const createProductImg = async (data: Prisma.products_imageCreateInput) => {
  try {
    const newProductImg = await db.products_image.create({
      data: data,
    });
    return newProductImg;
  } catch (error) {
    throw error;
  }
};

export const fetchAllProductImg = async () => {
  try {
    const data = await db.products_image.findMany({
      orderBy:{
        product_image_id:'asc'
      }
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchProductImgById = async (id: string) => {
  const productImgId = parseInt(id);
  try {
    const data = await db.products_image.findUnique({
      where: { product_image_id: productImgId },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateProductImg= async (id: string, data: Prisma.products_imageUpdateInput) => {
  try {
    const productImgId = parseInt(id);
    const updatedProductImg= await db.products_image.update({
      where: { product_image_id: productImgId },
      data,
    });
    return updatedProductImg;
  } catch (error) {
    throw error;
  }
};

export const deleteProductImg= async (id: string) => {
  try {
    const productImgId = parseInt(id);
    const deletedProductImg = await db.products_image.delete({
      where: { product_image_id: productImgId },
    });
    return deletedProductImg;
  } catch (error) {
    throw error;
  }
};
