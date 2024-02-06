import { v4 as uuidv4 } from "uuid";
import sql from "../config/sql.mjs";
import cloudinary from "../config/cloudinary.mjs";

export const createPost = (post) => {
  return new Promise((resolve, reject) => {
    const { id = uuidv4(), judul, body, image, penulis } = post;

    cloudinary.uploader.upload(
      image,
      {
        folder: "mitrakom",
      },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          const query = `INSERT INTO posts (id, judul, body, image, penulis) VALUES (?, ?, ?, ?, ?)`;
          const params = [id, judul, body, result.secure_url, penulis];

          sql
            .execute(query, [...params])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
        }
      }
    );
  });
};

export const getAllPosts = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM posts ORDER BY createdAt DESC";

    sql
      .execute(query)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const getPostById = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM posts WHERE id = ? LIMIT 1";

    sql
      .execute(query, [id])
      .then((result) => resolve(result[0]))
      .catch((err) => reject(err));
  });
};
