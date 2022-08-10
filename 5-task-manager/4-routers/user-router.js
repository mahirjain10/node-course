const express =require('express');
const multer = require('multer');
const sharp = require('sharp');
const { findByIdAndDelete } = require('../2-mongoose/3-user');
const router=new express.Router();
const User =require('../2-mongoose/3-user');
const auth=require('../7-middleware/1-auth.js');
// creating an account of user
router.post('/users',async(req,res)=>{
    const user=new User(req.body);
    try{
        await user.save();
        const token=await user.generateAuthToken();
        // res.status(201).send({user:user.trial(),token});
        res.status(201).send({user,token});
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
    // console.log(req.body);
})
// logging into an existing account
router.post('/users/login',async(req,res)=>{
    const user=await User.findByCredential(req.body.email,req.body.password);// findByCreditinal is made in user file
    const token= await user.generateAuthToken();// generating token
    if(!user){
        res.status(400).send();
    }
    else{
        res.status(201).send({user,token});
    }
})
// this route is used to find all user in DB 
// The problem with this route is it expose all the profile to everyone
router.get('/users',async (req,res)=>{
    try{
        const data =await User.find({});
        console.log(data);
        res.status(201).send(data);
    }
    catch(err){
        console.log(err);
    }
})

// to get only person profile whose token is submitted
router.get('/users/me',auth,async (req,res)=>{
    res.send(req.user);
})
// to logout from the app
router.post('/users/logout',auth,async(req,res)=>{
    try{
        req.user.tokens=req.user.tokens.filter((token)=>{
            // console.log(token);
            return token.token!==req.token
        })
        await req.user.save();
        res.status(200).send();
    }catch(err){
        res.status(500).send();
    }
    // console.log("req.user.tokens : ",req.user.tokens); // means tokens array in DB
    // console.log("req.token : ",req.token); // means which token you sent through api

})
// logging out your profile from every devices or deleting all your jwt tokens
router.post('/users/logoutAll',auth,async(req,res)=>{
    try{
        req.user.tokens=[];
        await req.user.save();
        res.status(200).send();

    }
    catch(err){
        console.log(err);
        res.status(500).send();
    }
})
router.patch('/users/:id',async(req,res)=>{
    const keys=Object.keys(req.body);
    console.log(keys);
    const allowedUpdates=["name","email","password"];
    const isValidOps=keys.every((keys)=>{
       return allowedUpdates.includes(keys);
    })
    if(!isValidOps){
        return res.status(400).send({error: 'didnt found the given key to update'})
    }
    try{
        // if doing it with the use of middle ware to hash password
        const user= await User.findById(req.params.id);
        keys.forEach((keys)=>{
            user[keys]=req.body[keys];
        })
        user.save();

        //if doing it without use of middleware to hash the password
        // const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!user){
            res.status(404).send();
        }
        res.send(user);
    }
    catch(err){
        console.log(err);
    }
})
// deleting user using object id
router.delete('/users/:id',async(req,res)=>{
    try{
        const data=await User.findByIdAndDelete(req.params.id);
        if (!data){
            res.status(404).send("not found");
        }
        res.status(201).send(data);
    }
    catch(err){
        res.status(500).send();
    }
})
// deleting user using jwt
// router.delete('/users/me',auth,async(req,res)=>{
//     try{
//         await req.user.remove();
//         res.status(201).send(req.user);
//     }
//     catch(err){
//         console.log(err.message);
//         // console.log(req.user);
//         res.status(500).send();
//     }
// })

//------------------------------------------------------------------------------------------- 

const upload=multer({
    // dest:'avatar',// this is used to save image in avatar folder in computer
    limits:100000,
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('please upload JPEG,JPG,PNG file extension'));// sending error
        }
        cb(undefined,true);
    }
})

// save image into folder called avatar in file system
//PS: uncomment the "dest" line in "upload" object to save the file in folder
// router.post('/avatar/me/upload',upload.single('avatar'),(req,res)=>{
//         res.send();
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message});
// })

// router.post('/avatar/me/upload',auth,upload.single('avatar'),async(req,res)=>{
//     req.user.avatar=req.file.buffer // this line means you are saving image binary data into avatar field in DB
//     // console.log(req.user.avatar);
//     await req.user.save();
//     res.send();
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message});
// })

// upload an image with a feature of resizing and converting image type (EG : png to jpg)
router.post('/avatar/me/upload',auth,upload.single('avatar'),async(req,res)=>{
    // req.user.avatar=req.file.buffer // this line means you are saving image binary data into avatar field in DB
    // console.log(req.user.avatar);
    const buffer = await sharp(req.file.buffer).resize({width:250 , height:250}).png().toBuffer(); // png() = convert image to png
    req.user.avatar= buffer;
    await req.user.save();
    res.send();
},(error,req,res,next)=>{
    res.status(400).send({error:error.message});
})

// delete image from DB
router.delete('/avatar/me/upload',auth,async(req,res)=>{
    req.user.avatar=undefined; // undefined will delete the avatar data
    await req.user.save();
    res.send();
})

// finding and serving image
router.get('/users/:id/avatar',async (req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        if (!user || !user.avatar){
            throw new Error();
        }
        res.set('Content-Type','image/jpg');
        res.send(user.avatar);
    }
    catch(err){
        console.log(err.message);
        res.status(404).send();
    }
})
//-----------------------------------------------------------------------------
module.exports=router