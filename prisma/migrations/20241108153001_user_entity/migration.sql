/*
  Warnings:

  - Added the required column `product_name` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "product_name" TEXT NOT NULL;
