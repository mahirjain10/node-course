const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,// making  name compulsory to be entered 
        trim:true // trim will remove spaces
    },
    email:{
        type:String,
        unique:true,
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
    },
    tokens:[{
        token:{
        type:String,
        required:true
        }
    }],
    avatar:{
        type:Buffer // buffer is used to save the 
    }
})
// generating token
// this need to use function() not arrow function
userSchema.methods.generateAuthToken=async function(){
    const user=this;
    // console.log(user);
    const token=jwt.sign({_id:user._id.toString()},'helloworld');
    user.tokens=user.tokens.concat({token});
    await user.save();
    return token;
}
// login user
userSchema.statics.findByCredential=async(email,password)=>{
    const user= await User.findOne({email});
    if(!user){
        throw new Error("cannot find the given email");
    }
    isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        throw new Error("cannot find the user");
    }
    return user;
}

// hiding private data
// one way to hide the data 
userSchema.methods.trial=function(){
    const user=this;
    const userObject= user.toObject();
    // console.log(userObject);// will contain whole object of a single data in database
    delete userObject.tokens;
    delete userObject.password;
    // console.log(userObject);
    return userObject;
} 
//  second way to hide the data using toJSON ,which will be applicable on every routes
userSchema.methods.toJSON=function(){
    const user=this;
    const userObject= user.toObject();
    // console.log(userObject);// will contain whole object of a single data in database
    delete userObject.tokens;
    delete userObject.password;
    // console.log(userObject);
    return userObject;
} 
// hashing the password
userSchema.pre('save',async function(next){
    const user=this
    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8);
    }
    next();
})
const User=mongoose.model('User',userSchema);
module.exports=User