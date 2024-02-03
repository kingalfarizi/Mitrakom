import { Router } from "express";
import { createPost } from "../controllers/posts.controller.mjs";

const postRouter = Router();

postRouter.post("/", createPost)

export default postRouter;