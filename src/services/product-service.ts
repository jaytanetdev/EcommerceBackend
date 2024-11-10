import { db, Prisma } from "../../prisma/prismaClient";

export const createProduct = async (data: Prisma.productsCreateInput) => {
  try {
    const newProduct = await db.products.create({
      data: data,
    });
    return newProduct;
  } catch (error) {
    throw error;
  }
};

export const fetchAllProduct = async () => {
  try {
    const data = await db.products.findMany({
      orderBy:{
        product_id:'asc'
      }
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchProductById = async (id: string) => {
  const productId = parseInt(id);
  try {
    const data = await db.products.findUnique({
      where: { product_id: productId },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateProduct= async (id: string, data: Prisma.productsUpdateInput) => {
  try {
    const productId = parseInt(id);
    const updatedProduct= await db.products.update({
      where: { product_id: productId },
      data,
    });
    return updatedProduct;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct= async (id: string) => {
  try {
    const productId = parseInt(id);
    const deletedProduct = await db.products.delete({
      where: { product_id: productId },
    });
    return deletedProduct;
  } catch (error) {
    throw error;
  }
};
