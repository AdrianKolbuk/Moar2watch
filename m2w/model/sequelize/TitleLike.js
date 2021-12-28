const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const TitleLike = sequelize.define('TitleLike', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    titleName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rating: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true
    },
    year: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = TitleLike;