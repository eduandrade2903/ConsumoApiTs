import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        id: {type: String},
        description: {type: String, required: true},
        date: {type: Date, required: true},
        user: {type: String, required: true}
    },
    {
        versionKey: false
    }
)

const tasks = mongoose.model("tasks", taskSchema)
export default tasks;