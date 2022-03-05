const { Post } = require('../models');

const postData = [
    {
        title: 'post title 1',
        post_content: 'post content 1',
        user_id: 1
    },
    {
        title: 'post title 2',
        post_content: 'post content 2',
        user_id: 2
    },
    {
        title: 'post title 3',
        post_content: 'post content 3',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;