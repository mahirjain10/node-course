const express =require('express');
const path =require('path');
const hbs=require('hbs');
const app=express();

const partialPath=path.join(__dirname,'../views/partial');
const filepath=path.join(__dirname,'../views');// saved views filepath
console.log(partialPath);
console.log(filepath);
app.set('views',filepath);
app.set('view engine','hbs')
hbs.registerPartials(partialPath);
app.get('/home',(req,res)=>{
    // render is used to render file meaning template engine
    res.render('index',{
        title:'mahir'
    })
})

app.listen(3000,()=>{
    console.log("server of partials started");
})

// STEPS TO USE PARTIALS
// 1. REQUIRE HBS
// 2. SAVE PATH OF PARTIALS AND VIEWS FOLDER
// 3. USE Hbs.registerPartials
// 4. SET PARTIAL IN HBS FILE 