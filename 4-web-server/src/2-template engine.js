const express= require('express');
const path=require('path');
const app=express();
app.set('view engine','hbs');// telling node the name of view engine
const filepath=path.join(__dirname,'../views');// saved views filepath
app.set('views',filepath);// setted views path 
app.get('/home',(req,res)=>{
    // render is used to render file meaning template engine
    res.render('index',{
        title:'mahir'
    })
})

app.listen(3000,()=>{
    console.log("server of template engine started");
})