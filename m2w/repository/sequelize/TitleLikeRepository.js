const Sequelize = require('sequelize');

const TitleLike = require('../../model/sequelize/TitleLike');
const User = require('../../model/sequelize/User');

//Nie potrzebujemy informacji o watchliście użytkownika z poziomu polubionego filmu, więc nie robimy include watchlist
// exports.getTitleLikes = () => {
//     return TitleLike.findAll({
//         include: [{
//             model: User,
//             as: 'user',
//             include: [{
//                 model: TitleWatchlist,
//                 as: 'titleWatchlists'
//             }]
//         }]
//     });
// };

exports.getTitleLikes = () => {
    return TitleLike.findAll({
        include: [{
            model: User,
            as: 'user'
        }]
    });
};



exports.getTitleLikeById = (titleLikeId) => {
    return TitleLike.findByPk(titleLikeId, {
        include: [{
            model: User,
            as: 'user'
        }]
    });
};

exports.createTitleLike = (data) => {
    console.log(JSON.stringify(data));

    return TitleLike.create({
        user_id: data.user_id,
        title_id: data.title_id,
        titleName: data.titleName,
        rating: data.rating,
        year: data.year,
        image: data.image
    });
};

exports.updateTitleLike = (titleLikeId, data) => {
    return TitleLike.update(data, { where: { _id: titleLikeId } });
}

// exports.updateTitleLike = (titleLikeId, data) => {
//     const user_id = data.user_id;
//     const title_id = data.title_id;
//     const titleName = data.titleName;
//     const rating = data.rating;
//     const year = data.year;
//     const image = data.image;
//     JSON.stringify(data);
//     return TitleLike.update(data, { where: { _id: titleLikeId } });
// }

exports.deleteTitleLike = (titleLikeId) => {
    return TitleLike.destroy({
        where: { _id: titleLikeId }
    });
}

exports.deleteManyTitleLikes = (titleLikeIds) => {
    return TitleLike.find({ _id: { [Sequelize.Op.in]: titleLikeIds } })
}