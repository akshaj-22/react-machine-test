const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app =express()
const product = require('./routes/task')


app.use(express.json())
app.use('/',product)
app.use(cors({
    orgin:"http://localhost:5173"
}))

mongoose.connect("mongodb://localhost:27017/machine-react",{})
const database = mongoose.connection

database.on('error',(error)=>{
    console.log(error)
})

database.once("connected",()=>{
    console.log('databse connected');
    
})

PORT=5000
app.listen(PORT, ()=>{
    console.log(`server is listening on the port ${PORT}`);
});

