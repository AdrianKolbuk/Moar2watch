const Sequelize = require('sequelize');

const TitleWatchlist = require('../../model/sequelize/TitleWatchlist');
const User = require('../../model/sequelize/User');
const TitleLike = require('../../model/sequelize/TitleLike');

exports.getTitleWatchlists = () => {
    return TitleWatchlist.findAll({
        include: [{
            model: User,
            as: 'user'
        }]
    });
};


exports.getTitleWatchlistById = (titleWatchlistId) => {
    return TitleWatchlist.findByPk(titleWatchlistId, {
        include: [{
            model: User,
            as: 'user'
        }]
    });
};

exports.createTitleWatchlist = (data) => {
    console.log(JSON.stringify(data));

    return TitleWatchlist.create({
        user_id: data.user_id,
        title_id: data.title_id,
        titleName: data.titleName,
        rating: data.rating,
        year: data.year,
        image: data.image
    });
};

exports.updateTitleWatchlist = (titleWatchlistId, data) => {
    return TitleWatchlist.update(data, { where: { _id: titleWatchlistId } });
}

exports.deleteTitleWatchlist = (titleWatchlistId) => {
    return TitleWatchlist.destroy({
        where: { _id: titleWatchlistId }
    });
}

exports.deleteManyTitleWatchlists = (titleWatchlistIds) => {
    return TitleWatchlist.find({ _id: { [Sequelize.Op.in]: titleWatchlistIds } })
}