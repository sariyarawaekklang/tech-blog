const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
    {
        username: 'user1',
        password: 'pass1'
    },
    {
        username: 'user2',
        password: 'pass2'
    },
    {
        username: 'user3',
        password: 'pass3'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;