const express = require("express");
const app = new express();
const multer = require("multer");
const upload = multer({
  dest: "images", // destination to save the image
  limits: 100000, // limiting the size of file to 1mb and 1 mb = 100000bytes
  fileFilter(req, file, cb) {
    if (!file.originalname.endsWith("pdf")) {
      return cb(new Error("please upload PDF file extension")); // sending error
    }
    cb(undefined, true);
    // 3 type of call backs
    // cb(new Error('please upload PDF file extension'));// sending error
    // cb(undefined,true)// undefined means no error and true means accepting file
    // cb(undefined,false)// undefined means no error and true means rejecting file
  },
});
// --------------------------------------------------------------
// this is for learning how to get error in json format
// error middleware
// const errorMiddleware=(req,res,next)=>{
//   throw new Error("This is error");
// }
// app.post("/upload", errorMiddleware, (req, res) => {
//   res.send();
// },(error,req,res,next)=>{// sending error message in JSON format
//   res.status(400).send({error:error.message});
// });
// ------------------------------------------------------------
app.post("/upload", upload.single('upload'), (req, res) => {
    res.send();
  },(error,req,res,next)=>{// sending error message in JSON format
    res.status(400).send({error:error.message});
  });
app.listen(8000, () => {
  console.log("server fired off");
});
