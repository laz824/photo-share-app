const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);

//Enables user to create posts w/ cloudinary for media uploads
router.post("/createPost", upload.single("file"), postsController.createPost);

//Enables user to like the post. In controller, uses POST model to update likes by 1
router.put("/likePost/:id", postsController.likePost);

//Enables user to delete the post. In controller, user POST model to delete post from mongoDB collection
router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
