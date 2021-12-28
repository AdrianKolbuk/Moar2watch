const sequelize = require('./sequelize');

const User = require('../../model/sequelize/User');
const TitleLike = require('../../model/sequelize/TitleLike');
const TitleWatchlist = require('../../model/sequelize/TitleWatchlist');

const authUtil = require('../../util/authUtils');
const passHash = authUtil.hashPassword('admin');

module.exports = () => {
    User.hasMany(TitleLike, { as: 'titleLikes', foreignKey: { name: 'user_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    User.hasMany(TitleWatchlist, { as: 'titleWatchlists', foreignKey: { name: 'user_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    TitleLike.belongsTo(User, { as: 'user', foreignKey: { name: 'user_id', allowNull: false } });
    TitleWatchlist.belongsTo(User, { as: 'user', foreignKey: { name: 'user_id', allowNull: false } });

    // Employee.hasMany(Employment, { as: 'employments', foreignKey: { name: 'emp_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    // Employment.belongsTo(Employee, { as: 'employee', foreignKey: { name: 'emp_id', allowNull: false } });
    // Department.hasMany(Employment, { as: 'employments', foreignKey: { name: 'dept_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    // Employment.belongsTo(Department, { as: 'department', foreignKey: { name: 'dept_id', allowNull: false } });

    let allUsers;
    return sequelize
        .sync({ force: true })
        .then(() => {
            return User.findAll();
        })
        .then(users => {
            if (!users || users.length == 0) {
                return User.bulkCreate([
                    { nickname: 'admin', email: 'admin@gmail.com', password: passHash },
                    { nickname: 'test', email: 'test@gmail.com', password: passHash }
                ])
                    .then(() => {
                        return User.findAll();
                    });
            } else {
                return users;
            }
        })
        .then(users => {
            allUsers = users;
            return TitleLike.findAll();
        })
        .then(titleLikes => {
            if (!titleLikes || titleLikes.length == 0) {
                return TitleLike.bulkCreate([
                    { user_id: allUsers[1]._id, title_id: 'tt0119174', titleName: 'The Game', rating: 4.5, year: '1997', image: 'https://imdb-api.com/images/original/MV5BZGVmMDNmYmEtNGQ2Mi00Y2ZhLThhZTYtYjE5YmQzMjZiZGMxXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_Ratio0.7273_AL_.jpg' },
                    { user_id: allUsers[1]._id, title_id: 'tt1034032', titleName: 'Gamer', rating: 4.5, year: '2009', image: 'https://imdb-api.com/images/original/MV5BMTkzMDU0NTg3MF5BMl5BanBnXkFtZTcwNzU1MjU1Mg@@._V1_Ratio0.7273_AL_.jpg' },
                    { user_id: allUsers[1]._id, title_id: 'tt1772872', titleName: 'Game', rating: 4.5, year: '2011', image: 'https://imdb-api.com/images/original/MV5BY2E1NmIyNmEtOTFhZS00MjM0LWJkM2UtYzc2NWNlMjM5ZGNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_Ratio0.7273_AL_.jpg' },
                    { user_id: allUsers[1]._id, title_id: 'tt0944947', titleName: 'Game of thrones', rating: 4.5, year: '2011', image: 'https://imdb-api.com/images/original/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_Ratio0.7273_AL_.jpg' },
                    { user_id: allUsers[1]._id, title_id: 'tt10919420', titleName: 'Squid Game', rating: 4.5, year: '2021', image: 'https://imdb-api.com/images/original/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio0.7273_AL_.jpg' }
                ]).then(() => {
                    return User.findAll();
                });
            } else {
                return User.findAll();
            }
        })
        .then(users => {
            allUsers = users;
            return TitleWatchlist.findAll();
        })
        .then(titleWatchlists => {
            if (!titleWatchlists || titleWatchlists.length == 0) {
                return TitleWatchlist.bulkCreate([
                    { user_id: allUsers[1]._id, title_id: 'tt0119174', titleName: 'The Game', rating: 4.5, year: '1997', image: 'https://imdb-api.com/images/original/MV5BZGVmMDNmYmEtNGQ2Mi00Y2ZhLThhZTYtYjE5YmQzMjZiZGMxXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_Ratio0.7273_AL_.jpg' },
                    { user_id: allUsers[1]._id, title_id: 'tt1034032', titleName: 'Gamer', rating: 4.5, year: '2009', image: 'https://imdb-api.com/images/original/MV5BMTkzMDU0NTg3MF5BMl5BanBnXkFtZTcwNzU1MjU1Mg@@._V1_Ratio0.7273_AL_.jpg' },
                    { user_id: allUsers[1]._id, title_id: 'tt1772872', titleName: 'Game', rating: 4.5, year: '2011', image: 'https://imdb-api.com/images/original/MV5BY2E1NmIyNmEtOTFhZS00MjM0LWJkM2UtYzc2NWNlMjM5ZGNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_Ratio0.7273_AL_.jpg' },
                    { user_id: allUsers[1]._id, title_id: 'tt0944947', titleName: 'Game of thrones', rating: 4.5, year: '2011', image: 'https://imdb-api.com/images/original/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_Ratio0.7273_AL_.jpg' },
                    { user_id: allUsers[1]._id, title_id: 'tt10919420', titleName: 'Squid Game', rating: 4.5, year: '2021', image: 'https://imdb-api.com/images/original/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio0.7273_AL_.jpg' }
                ]);
            } else {
                return titleWatchlists;
            }
        });
};