const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    // useCreateIndex:true
}).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error);
})
// const User=mongoose.model('User',{
//     name:{
//         type:String
//     },
//     age:{
//         type:Number
//     }
// })
// const me = new User({
//     name:'Andrew',
//     age:27
// })
// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log(error);
// })