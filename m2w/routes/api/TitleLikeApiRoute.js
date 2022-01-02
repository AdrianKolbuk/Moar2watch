const express = require('express');
const router = express.Router();

const titleLikeApiController = require('../../api/TitleLikeAPI');
const isAuth = require('../../middleware/isAuth');

router.get('/', isAuth, titleLikeApiController.getTitleLikes);
router.get('/:titleLikeId', isAuth, titleLikeApiController.getTitleLikeById);
router.post('/', isAuth, titleLikeApiController.createTitleLike);
router.put('/:TitleLikeId', isAuth, titleLikeApiController.updateTitleLike);
router.delete('/:titleLikeId', isAuth, titleLikeApiController.deleteTitleLike);

module.exports = router;