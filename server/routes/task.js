const express = require('express')
const router= express.Router()
const Task= require('../models/task')

//Create a product
router.post('/task', async(req,res)=>{
    try{
    const {taskId,title,description,status,priority,createdAt} = req.body;
    const task = new Task({taskId,title,description,status,priority,createdAt})
    await task.save()
    res.status(201).json({message:'task created succesfully'});
    }
    catch(error)
    {
        console.error('error creating task',error)
        res.status(500).json({message:'Failed to create task'})
    }
})

router.get('/tasks',async(req,res)=>{
    try {
        const tasks=await Task.find({})
        res.status(200).json({message:'tasks fetched successfully',tasks})
    } catch (error) {
        console.error('Error fetching tasks')
        res.status(500).json({message:'tasks fetching failed'})
    }
})

router.put('/tasks/:id',async(req,res)=>{
    try {
        const taskId=req.params.id
        const {title,description,status,priority}=req.body
        const updatedTask=await Task.findOneAndUpdate({taskId},{
            title,description,status,priority
        },{new:true})
        if(!updatedTask){
            res.status(404).json({message:'Error finding task'})
        }
        else{
            res.status(200).json({task:updatedTask})
        }
    } catch (error) {
        console.error('Failed to update task ',error)
    res.status(500).json({message:'Task updation failed'})
    }
})

router.delete ('/tasks/:id',async(req,res)=>{
    try {
        const taskId=req.params.id;
        const deletedTask=await Task.findOneAndDelete({taskId})
        if(!deletedTask){
            res.status(404).json({message:'Error finding task'})
        }
        else{
            res.status(200).json({message:'Task deleted successfully'})
        }
    } catch (error) {
        console.error('Failed to delete task ',error)
        res.status(500).json({message:'task deletion failed'})
    }
})


module.exports = router


