import { Router } from "express";
import {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/products.controller.mjs";

const productsRouter = Router();

productsRouter.get("/", getProducts);
productsRouter.get("/:id", getProductById);
productsRouter.put("/:id", updateProduct);
productsRouter.post("/", createProduct);

export default productsRouter;
