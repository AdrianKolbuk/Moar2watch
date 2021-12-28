const Sequelize = require('sequelize');

const sequelize = new Sequelize('m2w-sequelize', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;