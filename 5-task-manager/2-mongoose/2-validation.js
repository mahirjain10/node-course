const mongoose=require('mongoose');
const validator=require('validator');
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    // useCreateIndex:true
}).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error);
})
const User=mongoose.model('User',{
    name:{
        type:String,
        required:true,// making  name compulsory to be entered 
        trim:true // trim will remove spaces
    },
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Please enter email");
            }
        }
    },   
    age:{
        type:Number,
        // age is not compulsory 
        validate(value){// validating age should be greater than 0
            if(value<0){
                throw new Error("Age should be greater than 0");
            }
        }
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:7,
        validate(value){
            if(value.includes('password')){
                throw new Error("error ");
            }
        }
    }
})
const me = new User({
    name:'   Andrew Malkova',
    // email:"mahir@"// will throw error 
    email:"mahirjain@gmail.com",
    password:'lordmahir'
})
me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log(error);
})