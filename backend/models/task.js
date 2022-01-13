const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema(
    {
        taskTime: { type: String, required: true },
        taskTitle: { type: String, required: true },
        taskDescription: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('task', taskSchema)