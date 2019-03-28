const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    questions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'question'
        }
    ],
    answers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'answer'
        }
    ],
    rank: {
        type: Number,
        default: undefined
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);
