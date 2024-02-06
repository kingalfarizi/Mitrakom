import { Router } from "express";
import { createPost, getAllPosts } from "../controllers/posts.controller.mjs";

const postRouter = Router();

postRouter.post("/", createPost);
postRouter.get("/", getAllPosts);

export default postRouter;
