import { Router } from "express";
import { createPost, getAllPosts, getPostById } from "../controllers/posts.controller.mjs";

const postRouter = Router();

postRouter.post("/", createPost);
postRouter.get("/", getAllPosts);
postRouter.get("/:id", getPostById);

export default postRouter;
