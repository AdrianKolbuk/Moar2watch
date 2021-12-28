const express = require('express');
const router = express.Router();

const titleWatchlistApiController = require('../../api/TitleWatchlistAPI');

router.get('/', titleWatchlistApiController.getTitleWatchlists);
router.get('/:titleWatchlistId', titleWatchlistApiController.getTitleWatchlistById);
router.post('/', titleWatchlistApiController.createTitleWatchlist);
router.put('/:TitleWatchlistId', titleWatchlistApiController.updateTitleWatchlist);
router.delete('/:titleWatchlistId', titleWatchlistApiController.deleteTitleWatchlist);

module.exports = router;