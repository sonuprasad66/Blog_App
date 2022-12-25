const express = require("express");
const blogRouter = express.Router();
const {
  postBlog,
  getBlog,
  deleteBlog,
  editBlog,
} = require("../Controller/Blog.controller");
const { authentication } = require("../Middleware/authenticate");

blogRouter.post("/postblog", authentication, postBlog);
blogRouter.get("/getblog", getBlog);
blogRouter.delete("/deleteblog/:id", authentication, deleteBlog);
blogRouter.patch("/editblog/:id", authentication, editBlog);

module.exports = {
  blogRouter,
};
