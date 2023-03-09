//it is the schema of the NOTE WITH id  this user_id will be same dd as of a user with a same email id
const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
});
module.exports = PostSchema;