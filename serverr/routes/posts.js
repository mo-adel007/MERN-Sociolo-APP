import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ
// grab the used feed in the homepage
router.get("/", verifyToken, getFeedPosts);
//grab the user posts in his page
router.get("/:userId/posts", verifyToken, getUserPosts);

//UPDATE
// liking the post by user id
router.patch("/:id/like", verifyToken, likePost);

export default router;
