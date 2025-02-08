import express from "express";
import {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle
} from "../controllers/article.js"; // Ensure correct path

const router = express.Router();

router.get("/", getArticles);
router.get("/:id", getArticleById);
router.post("/", createArticle);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);

export default router; // ✅ Export as default
