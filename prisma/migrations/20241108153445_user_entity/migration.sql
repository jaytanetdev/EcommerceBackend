-- DropForeignKey
ALTER TABLE "products_image" DROP CONSTRAINT "products_image_fk_product_choice_id_fkey";

-- DropForeignKey
ALTER TABLE "products_image" DROP CONSTRAINT "products_image_fk_product_id_fkey";

-- AlterTable
ALTER TABLE "products_image" ALTER COLUMN "fk_product_id" DROP NOT NULL,
ALTER COLUMN "fk_product_choice_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "products_image" ADD CONSTRAINT "products_image_fk_product_id_fkey" FOREIGN KEY ("fk_product_id") REFERENCES "products"("product_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_image" ADD CONSTRAINT "products_image_fk_product_choice_id_fkey" FOREIGN KEY ("fk_product_choice_id") REFERENCES "products_choice"("product_choice_id") ON DELETE SET NULL ON UPDATE CASCADE;
