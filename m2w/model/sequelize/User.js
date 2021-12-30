const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const User = sequelize.define('User', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nickname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field is required"
            },
            len: {
                args: [2, 60],
                msg: "Field must contain from 2 to 60 characters"
            },
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "Field is required"
            },
            len: {
                args: [5, 60],
                msg: "Field must contain from 5 to 60 characters"
            },
            isEmail: {
                msg: 'Field must contain a valid email'
            }
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field is required"
            },
            len: {
                args: [5, 60],
                msg: "Field must contain from 5 to 60 characters"
            },
        }
    }
});

module.exports = User;