const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET ALL POSTS
router.get('/', async (_req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      isSuccess: true,
      data: posts,
    });
  } catch (error) {
    res.json({
      isSuccess: false,
      data: error,
    });
  }
});

// GET SPECIFIC POST
router.get('/:postId', async (req, res) => {
  const id = req.params.postId;
  try {
    const post = await Post.findById(id);
    res.status(200).json({
      isSuccess: true,
      data: post,
    });
  } catch (error) {
    res.json({
      isSuccess: false,
      data: error,
    });
  }
});

// INSERT A POST
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const post = new Post({
    title,
    description,
  });
  console.log(post);
  try {
    const savedPost = await post.save();
    res.status(200).json({
      isSuccess: true,
      data: savedPost,
    });
  } catch (error) {
    res.json({
      isSuccess: false,
      data: error,
    });
  }
});

// DELETE A POST
router.delete('/:postId', async (req, res) => {
  const id = req.params.postId;
  try {
    const post = await Post.remove({ _id: id });
    res.status(200).json({
      isSuccess: true,
      data: post,
    });
  } catch (error) {
    res.json({
      isSuccess: false,
      data: error,
    });
  }
});

// UPDATE A POST
router.patch('/:postId', async (req, res) => {
  const id = req.params.postId;
  const { title } = req.body;
  try {
    const updatedPost = await Post.updateOne(
      { _id: id },
      {
        $set: {
          title,
        },
      }
    );
    res.status(200).json({
      isSuccess: true,
      data: updatedPost,
    });
  } catch (error) {
    res.json({
      isSuccess: false,
      data: error,
    });
  }
});

module.exports = router;
