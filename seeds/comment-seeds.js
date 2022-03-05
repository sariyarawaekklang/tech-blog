const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'comment 1 text will be here.',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'comment 2 text will be here.',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'comment 3 text will be here.',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;