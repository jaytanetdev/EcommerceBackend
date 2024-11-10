import { body } from "express-validator";

export const productCreateValidator = [
  body("fk_category_id")
    .isInt()
    .withMessage("fk_category_id must be a int")
    .notEmpty()
    .withMessage("fk_category_id is required"),

  body("fk_user_id")
    .isInt()
    .withMessage("fk_user_id must be a int")
    .notEmpty()
    .withMessage("fk_user_id is required"),


    body("product_name")
    .isString()
    .withMessage("product_name must be a isString")
    .notEmpty()
    .withMessage("product_name is required"),

    body("description")
    .isString()
    .withMessage("description must be a isString")
    .notEmpty()
    .withMessage("description is required"),


];
