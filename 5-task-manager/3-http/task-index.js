const express=require('express');
const app=new express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const Task =require('../2-mongoose/4-task');
const mongoose=require('mongoose');
const auth=require('../7-middleware/1-auth');
// app.use(auth);
const routers=require('../4-routers/task-router')// yeh rha ;
app.use(routers);// yeh rha

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
}).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error);
})

// app.post('/tasks',async(req,res)=>{// yeh kam kar rha hai
//     const task=new Task(req.body);
//     try{
//         await task.save();
//         console.log(req.body)
//         res.status(201).send(task);
//     }
//     catch(err){
//         res.status(404).send(err);
//     }
//     // console.log(req.body);
// })

//
app.listen(8000,()=>{
    console.log('server started broo');
})