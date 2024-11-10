import { Router } from "express";
import * as userController from "../controllers/user-controller";
import { userValidator } from "../middleware/validators/user-validator";
import { validateRequest } from "../middleware/validators/validateRequest ";
import { auth } from "../middleware/auth/auth";

const router = Router();
router.post("/",  auth,userValidator, validateRequest, userController.create);
router.get("/",auth,  userController.getAllUsers);
router.get("/login/:username/:password",  userController.getUesrLoign);
router.get("/:id",auth,  userController.getUsersById);
router.patch("/:id",auth, userValidator, validateRequest, userController.update);
router.delete("/:id",auth, userController.remove); 

export default router;
