onst auth=async(req,res,next)=>{
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