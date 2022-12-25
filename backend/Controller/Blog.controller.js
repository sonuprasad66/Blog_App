const express = require("express");
const { blogModel } = require("../Models/Blog.model");
const { userModel } = require("../Models/User.model");

const postBlog = async (req, res) => {
  const { title, description, blog_image, gif, user_id } = req.body;
  const user = await userModel.findOne({ _id: user_id });

  const new_blog = new blogModel({
    title: title,
    description: description,
    blog_image: blog_image,
    gif: gif,
    user_name: user.name,
    user_id: user_id,
  });
  await new_blog.save();
  res.send({ message: "Blog Created Successfully", status: "Success" });
};

const getBlog = async (req, res) => {
  const blog = await blogModel.find({});
  res.send(blog);
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;
  const data = await blogModel.findOneAndDelete({ _id: id });
  res.send({ message: "Blog Deleted Successfully", status: "deleted" });
};

const editBlog = async (req, res) => {
  const { title, description, blog_image, gif, user_id } = req.body;
  const { id } = req.params;
  const user = await userModel.findOne({ _id: user_id });

  if (title || description || blog_image || gif) {
    const data = await blogModel.updateOne(
      { _id: id, user_id: user_id },
      {
        $set: {
          title: title,
          description: description,
          blog_image: blog_image,
          gif: gif,
          user_name: user.name,
          user_id: user_id,
        },
      }
    );
    res.send({ message: "Blog Updated Successfully", status: "updated" });
  }
};

module.exports = {
  postBlog,
  getBlog,
  deleteBlog,
  editBlog,
};
