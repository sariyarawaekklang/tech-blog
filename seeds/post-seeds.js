const { Post } = require('../models');

const postData = [
    {
        title: 'Introduction to Algorithms',
        post_content: 'In this post, you will learn the basics of algorithms.',
        user_id: 1
    },
    {
        title: 'What is MERN?',
        post_content: 'MERN stands for MongoDB, Express.js, React, and Node.js.',
        user_id: 2
    },
    {
        title: 'SQL vs. MongoDB',
        post_content: "Don't know when to use SQL vs. MongoDB? This post will teach you how!",
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;