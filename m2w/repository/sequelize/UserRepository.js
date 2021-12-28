const User = require("../../model/sequelize/User");
const TitleLike = require("../../model/sequelize/TitleLike");
const TitleWatchlist = require("../../model/sequelize/TitleWatchlist");

exports.getUsers = () => {
    return User.findAll();
};

exports.getUserById = (empId) => {
    return User.findByPk(empId,
        {
            include: [
                {
                    model: TitleLike,
                    as: 'titleLikes'
                },
                {
                    model: TitleWatchlist,
                    as: 'titleWatchlists'
                }]
        });
};

exports.createUser = (newUserData) => {
    return User.create({
        nickname: newUserData.nickname,
        email: newUserData.email,
        password: newUserData.password
    });
};

exports.updateUser = (userId, userData) => {
    const nickname = userData.nickname;
    const email = userData.email;
    const password = userData.password;
    return User.update(userData, { where: { _id: userId } });
};

exports.deleteUser = (userId) => {
    return User.destroy({
        where: { _id: userId }
    });

};

exports.findByEmail = (email) => {
    return Employee.findOne({
        where: { email: email }
    });
}