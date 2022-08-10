const express= require('express');
const app = express();
const path =require('path');

// serving static file
const filePath= path.join(__dirname,'../public');
console.log(filePath);
app.use(express.static(filePath));

app.listen(8000,()=>{
    console.log("Chat app server fired off ");
})
