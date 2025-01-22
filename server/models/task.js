const mongoose= require('mongoose')

const taskSchema= new mongoose.Schema({
    taskId:{type:Number,required:true},
    title:{type:String,required:true,trim:true},
    description:{type:String,required:true},
    status:{type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending'},
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
        },
    createdAt: {
        type: Date,
        default: Date.now
        }
});

module.exports= mongoose.model('tasks',taskSchema);