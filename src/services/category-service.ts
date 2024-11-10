import { db, Prisma } from "../../prisma/prismaClient";

export const createCategory = async (data: Prisma.categoryCreateInput) => {
  try {
    const newCategory = await db.category.create({
      data: data,
    });
    return newCategory;
  } catch (error) {
    throw error;
  }
};

export const fetchAllCategory = async () => {
  try {
    const data = await db.category.findMany({
      where: {
        is_active: true,
      },
      orderBy: {
        category_id: "asc",
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchCategoryById = async (id: string) => {
  const categoryId = parseInt(id);
  try {
    const data = await db.category.findUnique({
      where: { category_id: categoryId },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateCategory = async (
  id: string,
  data: Prisma.categoryUpdateInput
) => {
  try {
    const categoryId = parseInt(id);
    const updatedCategory = await db.category.update({
      where: { category_id: categoryId },
      data,
    });
    return updatedCategory;
  } catch (error) {
    throw error;
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const categoryId = parseInt(id);
    const deletedCategory = await db.category.delete({
      where: { category_id: categoryId },
    });
    return deletedCategory;
  } catch (error) {
    throw error;
  }
};

export const fetchCatProductById = async (id: string) => {
  try {
    const categoryId = parseInt(id);

    const whereClause = {
      is_active: true,
      ...(categoryId !== 0 ? { category_id: categoryId } : { category_id: { not: 0 } }),
    };

    const data = await db.category.findMany({
      where: whereClause,
      orderBy: {
        category_id: "asc",
      },
      include: {
        products: {
          orderBy: {
            product_id: "asc",
          },
          include: {
            products_image: true, // สมมติว่าคุณต้องการรวมข้อมูลทั้งหมดในตาราง product_img
          },
        },
      },
    });

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
