const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    entry: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "To-Do",
        required: true,
        enum: ["To-Do", "Completed"]
    }
});

module.exports = mongoose.model('Task', taskSchema)