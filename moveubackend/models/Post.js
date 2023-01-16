// models/Post.js

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image_location: {
    type: String
  },
  category: {
    type: String,
    required:true
  },
  comments: [{ 
    body: String,
    date: Date
  }],
  meta: {
    votes: Number,
    favs:  Number
  },
  published_date: {
    type: Date
  },
  publisher: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }},{
    collection:'posts'
  }
);
const Post = mongoose.model('Post', PostSchema);
Post.createIndexes();
module.exports = Post