import { Router } from "express";
import { getProducts } from "../controllers/products.controller.mjs";

const productsRouter = Router();

productsRouter.get('/', getProducts);

export default productsRouter;