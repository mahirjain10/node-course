const express =require('express');
const router=new express.Router();
const Task =require('../2-mongoose/4-task');
const auth=require('../7-middleware/1-auth');

// This is use for saving TASK and COMPLETION 
// router.post('/tasks',async(req,res)=>{
//     const task=new Task(req.body);
//     try{
//         await task.save();
//         // console.log(req.body)
//         res.status(201).send(task);
//     }
//     catch(err){
//         console.log("Error while saving task", err);
//         res.status(500).send(err);
//     }
// })

// This is IMP ,This is use to save TASK ,COMPLETION AND OWNER (ID)
router.post('/tasks',auth,async(req,res)=>{
    const task = new Task({
        ...req.body, // iterating the whole body to save in DB
        owner:req.user._id //saving users id in owner's key (in DB)
    })
    console.log(req.user);
    try{
        await task.save();
        res.status(201).send(task);
    }
    catch(err){
        res.status(500).send();
    }
})

router.get('/tasks' ,async(req,res)=>{
    const data = await Task.find({})
    res.send(data);
    // console.log(data);
})
router.get('/tasks/:name',async(req,res)=>{
    const dataname= await Task.find({name:req.params.name});
    res.send(dataname);
    // console.log(req.params);
})
router.delete('/tasks/:id',async(req,res)=>{
    const data= await Task.findByIdAndDelete(req.params.id);
    try{
        if(!data){
            res.status(404).send("not found");
        }
        else{
            res.send("found");
        }
    }catch(e){
        res.status(500).send(e);
    }
    
})
module.exports=router