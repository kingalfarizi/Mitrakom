import { Router } from "express";
import { createPost, getAllPosts, getPostById, updatePost } from "../controllers/posts.controller.mjs";

const postRouter = Router();

postRouter.post("/", createPost);
postRouter.get("/", getAllPosts);
postRouter.get("/:id", getPostById);
postRouter.put("/:id", updatePost);

export default postRouter;
