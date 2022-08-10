const { decode } = require('jsonwebtoken');
const jwt=require('jsonwebtoken');
const User=require('../2-mongoose/3-user');
// checking if middle ware works 
// const auth=async(req,res,next)=>{
//     console.log("Hello I am a Middle ware");
//     next();
// }

// 
const auth=async(req,res,next)=>{
    try{
        const token=req.header('Authorization').replace('Bearer ','');
        const decoded=jwt.verify(token,'helloworld');
        const user=await User.findOne({_id:decoded._id,'tokens.token':token});
        if(!user){
            throw new Error();
        }
        // console.log(token);
        req.token=token;
        req.user=user;
        next();
    }
    catch(err){
        // console.log(token);
        res.status(401).send({error:"please authenticate"});
    }
}
module.exports=auth;