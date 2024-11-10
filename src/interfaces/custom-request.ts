// src/interfaces/CustomRequest.ts
import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface CRequest extends Request {
  user?: string | JwtPayload; 
  files?:any
}
