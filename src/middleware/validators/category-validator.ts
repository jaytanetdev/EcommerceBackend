import { body } from "express-validator";

export const categoryCreateValidator = [
  body("category_name")
    .isString()
    .withMessage("category_name must be a string")
    .notEmpty()
    .withMessage("category_name is required"),
];
