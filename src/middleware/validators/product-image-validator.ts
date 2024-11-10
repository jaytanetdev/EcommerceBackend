import { body } from "express-validator";

export const productImgCreateValidator = [
  body("product_images")
    .isString()
    .withMessage("product_images must be a string")
    .notEmpty()
    .withMessage("product_images is required"),

//   body("fk_product_id")
//     .isInt()
//     .withMessage("fk_product_id must be a isInt"),

//   body("fk_product_choice_id")
//     .isInt()
//     .withMessage("fk_product_choice_id must be a isInt")

];
