const TitleWatchlistRepository = require('../repository/sequelize/TitleWatchlistRepository');

exports.getTitleWatchlists = (req, res, next) => {
    TitleWatchlistRepository.getTitleWatchlists()
        .then(titleWatchlists => {
            res.status(200).json(titleWatchlists);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getTitleWatchlistById = (req, res, next) => {
    const titleWatchlistId = req.params.titleWatchlistId;
    TitleWatchlistRepository.getTitleWatchlistById(titleWatchlistId)
        .then(titleWatchlist => {
            if (!titleWatchlist) {
                res.status(404).json({
                    message: 'TitleWatchlist with id: ' + titleWatchlistId + ' not found'
                })
            } else {
                res.status(200).json(titleWatchlist);
            }
        });
};

exports.createTitleWatchlist = (req, res, next) => {
    TitleWatchlistRepository.createTitleWatchlist(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateTitleWatchlist = (req, res, next) => {
    const titleWatchlistId = req.params.titleWatchlistId;
    TitleWatchlistRepository.updateTitleWatchlist(titleWatchlistId, req.body)
        .then(result => {
            res.status(200).json({ message: 'TitleWatchlist updated!', titleWatchlist: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteTitleWatchlist = (req, res, next) => {
    const titleWatchlistId = req.params.titleWatchlistId;
    TitleWatchlistRepository.deleteTitleWatchlist(titleWatchlistId)
        .then(result => {
            res.status(200).json({ message: 'Removed titleWatchlist', titleWatchlist: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};