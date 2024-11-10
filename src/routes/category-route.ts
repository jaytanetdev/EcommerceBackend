import { Router } from "express";
import * as categoryController from "../controllers/category-controller";
import { categoryCreateValidator } from "../middleware/validators/category-validator";
import { validateRequest } from "../middleware/validators/validateRequest ";

const router = Router();
router.post("/", categoryCreateValidator, validateRequest, categoryController.create);
router.get("/", categoryController.getAllCategory);
router.get("/:id", categoryController.getCategoryById);
router.patch("/:id", categoryController.update);
router.delete("/:id", categoryController.remove);
router.get("/product/:id", categoryController.getCategoryProduct);

export default router;
