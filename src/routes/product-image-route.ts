import { Router } from "express";
import * as productImgController from "../controllers/product-image-controller";
import { validateRequest } from "../middleware/validators/validateRequest ";
import { productImgCreateValidator } from "../middleware/validators/product-image-validator";

const router = Router();
router.post("/", productImgCreateValidator, validateRequest, productImgController.create);
router.post("/upload", productImgController.upload);
router.get("/", productImgController.getAllProductImg);
router.get("/:id", productImgController.getProductImgById);
router.patch("/:id", productImgController.update);
router.delete("/:id", productImgController.remove);


export default router;
