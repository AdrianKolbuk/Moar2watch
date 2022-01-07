const express = require('express');
const router = express.Router();

const titleLikeApiController = require('../../api/TitleLikeAPI');
const isAuth = require('../../middleware/isAuth');

router.get('/', titleLikeApiController.getTitleLikes);
router.get('/:titleLikeId', titleLikeApiController.getTitleLikeById);
router.post('/', titleLikeApiController.createTitleLike);
router.put('/:TitleLikeId', titleLikeApiController.updateTitleLike);
router.delete('/:titleLikeId', titleLikeApiController.deleteTitleLike);

module.exports = router;