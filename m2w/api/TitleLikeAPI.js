const TitleLikeRepository = require('../repository/sequelize/TitleLikeRepository');

exports.getTitleLikes = (req, res, next) => {
    TitleLikeRepository.getTitleLikes()
        .then(titleLikes => {
            res.status(200).json(titleLikes);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getTitleLikeById = (req, res, next) => {
    const titleLikeId = req.params.titleLikeId;
    TitleLikeRepository.getTitleLikeById(titleLikeId)
        .then(titleLike => {
            if (!titleLike) {
                res.status(404).json({
                    message: 'TitleLike with id: ' + titleLikeId + ' not found'
                })
            } else {
                res.status(200).json(titleLike);
            }
        });
};

exports.createTitleLike = (req, res, next) => {
    TitleLikeRepository.createTitleLike(req.body)
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

exports.updateTitleLike = (req, res, next) => {
    const titleLikeId = req.params.titleLikeId;
    TitleLikeRepository.updateTitleLike(titleLikeId, req.body)
        .then(result => {
            res.status(200).json({ message: 'TitleLike updated!', titleLike: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteTitleLike = (req, res, next) => {
    const titleLikeId = req.params.titleLikeId;
    TitleLikeRepository.deleteTitleLike(titleLikeId)
        .then(result => {
            res.status(200).json({ message: 'Removed titleLike', titleLike: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};