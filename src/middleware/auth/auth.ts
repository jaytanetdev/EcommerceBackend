const jwt = require("jsonwebtoken");
import { Response, NextFunction } from "express";
import { CRequest } from "../../interfaces/custom-request";

export const auth = (req: CRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).send("Unauthorized");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).send("Invalid Token");
  }
};
