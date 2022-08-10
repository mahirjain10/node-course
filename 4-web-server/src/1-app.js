const express=require('express');
const path =require('path');
const app=express();

// creating a file path
const filePath=path.join(__dirname,'/public');
console.log(filePath);

// app.get('/',(req,res)=>{
//     res.send("home page");
// })
// serving html 
app.get('/html',(req,res)=>{
    res.send("<h1>This is a Html page</h1>");
})
// serving json
app.get('/json',(req,res)=>{
    res.send({
        "name":"mahir"
    })
})
// serving a static file
app.use('/index',express.static(filePath));

app.listen(3000,()=>{
    console.log("server set up");
})