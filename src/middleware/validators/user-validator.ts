import { body } from "express-validator";
import { db } from "../../../prisma/prismaClient";

export const userValidator = [
  body("first_name")
    .isString()
    .withMessage("First name must be a string")
    .notEmpty()
    .withMessage("First name is required"),

  body("last_name")
    .isString()
    .withMessage("Last name must be a string")
    .notEmpty()
    .withMessage("Last name is required"),

  body("username")
    .isString()
    .withMessage("Username must be a string")
    .notEmpty()
    .withMessage("Username is required")
    .custom(async (value) => {
      const user = await db.users.findUnique({
        where: { username: value },
      });
      if (user) {
        throw new Error("Username already exists");
      }
    }),
  body("password")
    .isString()
    .withMessage("Password must be a string")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),


];
