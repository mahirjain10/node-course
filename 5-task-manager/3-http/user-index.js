const express = require("express");
const app = new express();
app.use(express.json()); // will convert string into obj
const User = require("../2-mongoose/3-user");
require("../2-mongoose/1-basic"); // have to add this ccompulsory
const userRouter = require("../4-routers/user-router");
const auth=require('../7-middleware/1-auth.js');

// const trialImageRouter=require('../8-multer/1-image-upload-trial');

// example of midddleware
// app.use((req, res, next) => {
//   if (req.method == "GET") {
//     res.send("cannot send GET request");
//   } else {
//     next();
//   }
// });

// block all request and show message site on maintance 
// app.use((req,res,next)=>{
//     res.status(503).send("Site under maintance")
// })

app.use(userRouter);
// app.use(trialImageRouter);
// app.post('/users',(req,res)=>{
//     console.log(req.body);// to console.log data sent through json
//     // res.send("testing");
//     const user=new User(req.body);
//     user.save().then(()=>{
//         res.send(user);
//     }).catch((error)=>{
//         res.status(400).send(error);
//     })
// })

// using async and await
// app.get('/users',async (req,res)=>{
//     try{
//         const data =await User.find({});
//         console.log(data);
//         res.status(201).send(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// })

// app.delete('/users/me',auth,async(req,res)=>{
//   try{
//       await req.user.remove();
//       res.status(201).send(req.user);
//   }
//   catch(err){
//       console.log(err.message);
//       // console.log(req.user);
//       res.status(500).send(err.message);
//   }
// })
app.delete('/users/me', auth, async (req, res) => {
  try {
      await req.user.remove()
      res.send(req.user)
  } catch (e) {
      res.status(500).send()
  }
})
app.listen(8000, () => {
  console.log("server fired off");
});
// without middle ware : new request => run route handler
// with middleware : new request => do some task => run router handler
