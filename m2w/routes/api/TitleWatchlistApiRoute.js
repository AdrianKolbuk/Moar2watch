const express = require('express');
const router = express.Router();

const titleWatchlistApiController = require('../../api/TitleWatchlistAPI');
const isAuth = require('../../middleware/isAuth');

router.get('/', isAuth, titleWatchlistApiController.getTitleWatchlists);
router.get('/:titleWatchlistId', isAuth, titleWatchlistApiController.getTitleWatchlistById);
router.post('/', isAuth, titleWatchlistApiController.createTitleWatchlist);
router.put('/:TitleWatchlistId', isAuth, titleWatchlistApiController.updateTitleWatchlist);
router.delete('/:titleWatchlistId', isAuth, titleWatchlistApiController.deleteTitleWatchlist);

module.exports = router;