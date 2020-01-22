const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    completedAt: {
        type: Date
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;