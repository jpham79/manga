const async = require('async');
const Comment = require('../../models/Comment');

const comments = [{
    comment: 'Yeet haw baby what up',
}];

module.exports = fixturesCallback => {
    Comment.insertMany(comments, err => {
        if (err) {
            // console.error(err);
            fixturesCallback(err)
        }
        console.log('Finished loading comments');
    });

}