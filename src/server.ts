import express, {Request, Response, Application } from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user-route";
import productRoute from "./routes/product-route";
import categoryRoute from "./routes/category-route";
import productImgRoute from "./routes/product-image-route";
import cors from "cors";
import { PrismaClient } from "@prisma/client"; 
const fileUpload = require('express-fileupload');

dotenv.config();
const prisma = new PrismaClient(); 
const app: Application = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use('/uploads', express.static('uploads'));

const allowedOrigins = ["http://localhost:3000"];
const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));
prisma
  .$connect()
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((error) => {
    console.error("Failed to connect to the database", error);
  });


app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello world");
});

app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);
app.use("/api/productimg", productImgRoute);
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});