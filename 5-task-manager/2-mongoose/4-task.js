const mongoose=require('mongoose');
const validator=require('validator');

const taskSchema=mongoose.Schema({
    description:{
        type:String,
        required:true,// making  name compulsory to be entered 
        trim:true // trim will remove spaces
    },
    completion:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:false
    }
})
const Task=mongoose.model('Task',taskSchema);
// const me = new Task({
//         name:'packing',
//         completion:false
//     })
//     me.save().then(()=>{
//         console.log(me)
//     }).catch((error)=>{
//         console.log(error);
//     })
module.exports=Task