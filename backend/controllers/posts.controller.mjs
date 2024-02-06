import * as postServices from "../services/posts.service.mjs";

export const createPost = (req, res) => {
  const post = req.body;
  postServices
    .createPost(post)
    .then((data) => {
      res.status(200).json({
        message: "Post created",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

export const getAllPosts = (req, res) => {
  postServices
    .getAllPosts()
    .then((data) => {
      res.status(200).json({
        message: "All posts",
        data: data[0],
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

export const getPostById = (req, res) => {
  const { id } = req.params;
  postServices
    .getPostById(id)
    .then((data) => {
      res.status(200).json({
        message: "Post",
        data: data[0],
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};
