import { v4 as uuidv4 } from "uuid";
import sql from "../config/sql.mjs";

export const createPost = (post) => {
  return new Promise((resolve, reject) => {
    const {
      id = uuidv4(),
      judul,
      body,
      image,
      penulis,
    } = post;

    const query = `INSERT INTO posts (id, judul, body, image, penulis) VALUES (?, ?, ?, ?, ?)`;
    const params = [id, judul, body, image, penulis];

    sql
      .execute(query, [...params])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};
