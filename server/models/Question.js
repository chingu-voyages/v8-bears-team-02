const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'comment'
        }
    ],
    answers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'answer'
        }
    ],
    categories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'category'
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Question = mongoose.model('question', QuestionSchema);
