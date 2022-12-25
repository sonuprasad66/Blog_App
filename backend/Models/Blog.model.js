const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    blog_image: { type: String },
    gif: { type: String },
    user_name: { type: String, require: true },
    user_id: { type: String, require: true },
    user_profile_pic: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const blogModel = new mongoose.model("blog", blogSchema);

module.exports = {
  blogModel,
};
