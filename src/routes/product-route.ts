import { Router } from "express";
import * as productController from "../controllers/product-controller";
import { productCreateValidator } from "../middleware/validators/product-validator";
import { validateRequest } from "../middleware/validators/validateRequest ";

const router = Router();
router.post("/", productCreateValidator, validateRequest, productController.create);
router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProductById);
router.patch("/:id", productController.update);
router.delete("/:id", productController.remove);

export default router;
