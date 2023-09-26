const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: String, 
  likes: {
    type: Number,
    default: 0
    },
   user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

   
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;