const express =require('express');
const app= express();

app.get('/product',(req,res)=>{
    // console logging query inserted in search bar
    console.log(req.query);
    // res.send("hello i am product page");
    if(req.query.item==='apple'){
         res.send({
            product:"item"
        })
    }
    else{
        res.send("error");
    }
})
app.listen(3000,()=>{
    console.log("server fired off");
})